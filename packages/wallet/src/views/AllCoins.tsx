import { TokenPrice } from '@0xsequence/api'
import { TokenBalance } from '@0xsequence/indexer'
import { Box, ChevronLeftIcon, Button, Text, vars } from '@0xsequence/design-system'
import { ethers } from 'ethers'
import React from 'react'
import { useAccount, useNetwork } from 'wagmi'

import { CoinRow, CoinRowSkeleton } from '../shared/CoinRow'
import { HomeButton } from '../shared/HomeButton'

import { getNativeTokenInfoByChainId, getPercentagePriceChange, computeBalanceFiat } from '../utils'
import { useBalances, useNavigation, useCoinPrices } from '../hooks'


export const AllCoins = () => {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const { setNavigation } = useNavigation()

  const { data: balances, isLoading: isLoadingBalances } = useBalances({ accountAddress: address || '', chainId })

  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)

  const nativeTokenBalance = balances?.find(b => b.contractAddress === ethers.constants.AddressZero)

  const erc20TokensBalances = balances?.filter(b => b.contractType === 'ERC20') || []

  const nativeToken = {
    chainId,
    contractAddress: ethers.constants.AddressZero
  };

  const erc20Tokens = erc20TokensBalances.map(token => ({
    chainId,
    contractAddress: token.contractAddress
  }));

  const {
    data: coinPrices = [],
    isLoading: isLoadingCoinPrices
  } = useCoinPrices({
    tokens: [nativeToken, ...erc20Tokens]
  });


  const onClickBack = () => {
    setNavigation && setNavigation({
      location: 'home'
    })
  }

  const isLoading = isLoadingBalances || isLoadingCoinPrices

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
          {nativeTokenBalance && (
            <CoinRow
              imageUrl={nativeTokenInfo.logoURI}
              decimals={nativeTokenInfo.decimals}
              name={nativeTokenInfo.name}
              symbol={nativeTokenInfo.symbol}
              balance={nativeTokenBalance.balance}
              fiatValue={computeBalanceFiat(nativeTokenBalance, coinPrices)}
              priceChangePercentage={getPercentagePriceChange(nativeTokenBalance, coinPrices)}
            />
          )}
          {erc20TokensBalances && (
            erc20TokensBalances.sort((a, b) => {
              const isHigherFiat = Number(computeBalanceFiat(b, coinPrices)) - Number(computeBalanceFiat(a, coinPrices))
              return isHigherFiat
            }).map(token => (
              <CoinRow
                imageUrl={token.contractInfo?.logoURI || ''}
                decimals={token.contractInfo?.decimals || 18}
                name={token.contractInfo?.name || ''}
                symbol={token.contractInfo?.symbol || ''}
                balance={token.balance}
                fiatValue={computeBalanceFiat(token, coinPrices)}
                priceChangePercentage={getPercentagePriceChange(token, coinPrices)}
              />
            ))
          )}
        </Box>
      </Box>
    )
  }

  const totalTokens = 1 + (erc20TokensBalances?.length || 0)

  return (
    <Box paddingX="4" paddingBottom="4">
      <HomeButton />

      {getContent()}
    </Box>
  )
}