import React from 'react'
import { ethers } from 'ethers'
import { Token, TokenPrice } from '@0xsequence/api'
import { TokenBalance } from '@0xsequence/indexer'
import {
  Box,
  Text,
  GradientAvatar
} from '@0xsequence/design-system'
import { useAccount, useNetwork } from 'wagmi'

import { useBalances, useCoinPrices, useModalTheme } from '../hooks'
import { formatAddress, compareAddress, capitalize, getChainColor } from '../utils'

import { Skeleton } from './Skeleton'
import { CopyButton  } from './CopyButton'

export const HomeHeader = () => {
  const theme = useModalTheme()
  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const chainName = chain?.name || ''
  const { data: balances = [], isLoading: isLoadingBalances } = useBalances({ accountAddress: address || '', chainId: chain?.id || 1 })

  const nativeTokenBalances = balances?.filter(b => b.contractAddress === ethers.constants.AddressZero)

  const erc20TokensBalances = balances?.filter(b => b.contractType === 'ERC20')

  const tokenBalances = [...nativeTokenBalances, ...erc20TokensBalances]

  const nativeToken: Token = {
    chainId,
    contractAddress: ethers.constants.AddressZero
  }
  
  const erc20Tokens: Token[] = balances.filter(b => b.contractType === 'ERC20').map((token) => ({
    chainId,
    contractAddress: token.contractAddress
  }))

  const { data: coinPrices = [], isLoading: isLoadingCoinPrices } = useCoinPrices({
    tokens: [nativeToken, ...erc20Tokens]
  })

  const isLoading = isLoadingBalances || isLoadingCoinPrices

  const computeBalance = (balances: TokenBalance[], prices: TokenPrice[]): string => {
    let totalUsd = 0

    balances.forEach((balance) => {
        const priceForToken = prices.find(p => compareAddress(p.token.contractAddress, balance.contractAddress))
        if (!priceForToken) {
          return;
        }
        const priceFiat = priceForToken.price?.value || 0
        const decimals = balance.contractInfo?.decimals || 18
        const valueFormatted = ethers.utils.formatUnits(balance.balance, decimals)
        const value = parseFloat(valueFormatted) * priceFiat
        totalUsd += value
    })
    
    return totalUsd.toFixed(2)
  }

  const balance = computeBalance(tokenBalances, coinPrices)

  const getBalance = () => {
    if (isLoading) {
      return (
        <Box marginTop="4" flexDirection="column" justifyContent="center" alignItems="center">
          <Box >
            <Text color="text50" variant="small">Balance</Text>
          </Box>
          <Box>
            <Skeleton width="100px" height="36px" />
          </Box>
        </Box>
      )
    }

    return (
      <Box marginTop="4" flexDirection="column" justifyContent="center" alignItems="center">
        <Box>
          <Text color="text50" variant="small">Balance</Text>
        </Box>
        <Box>
          <Text variant="xlarge">${balance}</Text>
        </Box>
      </Box>
    )
  }

  return (
    <>
      <GradientAvatar style={{ float: 'left', marginTop: '16px' }} address={address || ''} />
      <Box marginTop="3" gap="2" alignItems="center" style={{ height: "60px"}}>
          <Box width="full" flexDirection="column" alignItems="center" justifyContent="center" >
            <Box alignItems="center" justifyContent="center">
              <Text variant="normal">
                {formatAddress(address || '')}
              </Text>
              <CopyButton marginLeft="2" text={address || ''} />
            </Box>
            <Box style={{ marginTop: '-4px' }} >
              <Text variant="small" style={{ color: getChainColor(chainId, theme) }}>
                {`${capitalize(chainName)} - ${chainId}`}
              </Text>
            </Box>
          </Box>
      </Box>
      {getBalance()}
    </>
  )
}