import { Box, Button, Text, vars } from '@0xsequence/design-system'
import { ethers } from 'ethers'
import React from 'react'
import { useAccount, useNetwork } from 'wagmi'

import { CoinRow, CoinRowSkeleton } from '../components/CoinRow'

import { getNativeTokenInfoByChainId } from '../utils'
import { useBalances, useNavigation } from '../hooks'


export const AllCoins = () => {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const setNavigation = useNavigation()

  const { data: balances, isLoading } = useBalances({ accountAddress: address || '', chainId })

  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)

  const nativeToken = balances?.find(b => b.contractAddress === ethers.constants.AddressZero)

  const erc20Tokens = balances?.filter(b => b.contractType === 'ERC20')

  const onClickBack = () => {
    setNavigation && setNavigation({
      location: 'home'
    })
  }

  const getContent = () => {
    if(isLoading) {
      return (
        <Box width="full" flexDirection="column" gap="2">
          <CoinRowSkeleton />
          <CoinRowSkeleton />
        </Box>
      )
    }

    return (
      <Box>
        <Box marginBottom="1">
          <Text variant="small" color="text50">{`Coins (${totalTokens})`}</Text>
        </Box>
        <Box width="full" flexDirection="column" gap="2">
          {nativeToken && (
            <CoinRow
              imageUrl={nativeTokenInfo.logoURI}
              decimals={nativeTokenInfo.decimals}
              name={nativeTokenInfo.name}
              symbol={nativeTokenInfo.symbol}
              balance={nativeToken.balance} 
            />
          )}
          {erc20Tokens && (
            erc20Tokens.map(token => (
              <CoinRow
                imageUrl={token.contractInfo?.logoURI || ''}
                decimals={token.contractInfo?.decimals || 18}
                name={token.contractInfo?.name || ''}
                symbol={token.contractInfo?.symbol || ''}
                balance={token.balance} 
              />
            ))
          )}
        </Box>
      </Box>
    )
  }

  const totalTokens = 1 + (erc20Tokens?.length || 0)

  return (
    <Box paddingX="4" paddingBottom="4">
      <Box alignItems="center" style={{ height: '60px' }}>
        <Button onClick={onClickBack} label="back" />
      </Box>

      {getContent()}
    </Box>
  )
}