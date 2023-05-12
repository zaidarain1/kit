import { TokenPrice } from '@0xsequence/api'
import { TokenBalance } from '@0xsequence/indexer'
import { Box, ChevronLeftIcon, Button, Text, vars } from '@0xsequence/design-system'
import { ethers } from 'ethers'
import React from 'react'
import { useAccount, useNetwork } from 'wagmi'

import { CoinRow, CoinRowSkeleton } from '../components/CoinRow'

import { getNativeTokenInfoByChainId, compareAddress } from '../utils'
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

  const computeBalance = (balance: TokenBalance, prices: TokenPrice[]): string => {
      let totalUsd = 0

      const priceForToken = prices.find(p => compareAddress(p.token.contractAddress, balance.contractAddress))
      if (!priceForToken) {
        return '0.00';
      }
      const priceFiat = priceForToken.price?.value || 0
      const decimals = balance.contractInfo?.decimals || 18
      const valueFormatted = ethers.utils.formatUnits(balance.balance, decimals)
      const usdValue = parseFloat(valueFormatted) * priceFiat
      totalUsd += usdValue
    
    return `${totalUsd.toFixed(2)}`
  }


  const onClickBack = () => {
    setNavigation && setNavigation({
      location: 'home'
    })
  }

  const getPercentagePriceChange = (balance: TokenBalance, prices: TokenPrice[]) => {
    const priceForToken = prices.find(p => compareAddress(p.token.contractAddress, balance.contractAddress))
    if (!priceForToken) {
      return 0;
    }

    const price24HourChange = priceForToken?.price24hChange?.value || 0
    return price24HourChange
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
              fiatValue={computeBalance(nativeTokenBalance, coinPrices)}
              priceChangePercentage={getPercentagePriceChange(nativeTokenBalance, coinPrices)}
            />
          )}
          {erc20TokensBalances && (
            erc20TokensBalances.sort((a, b) => {
              const isHigherFiat = Number(computeBalance(b, coinPrices)) - Number(computeBalance(a, coinPrices))
              return isHigherFiat
            }).map(token => (
              <CoinRow
                imageUrl={token.contractInfo?.logoURI || ''}
                decimals={token.contractInfo?.decimals || 18}
                name={token.contractInfo?.name || ''}
                symbol={token.contractInfo?.symbol || ''}
                balance={token.balance}
                fiatValue={computeBalance(token, coinPrices)}
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
      <Box alignItems="center" style={{ height: '60px' }}>
        <Button leftIcon={ChevronLeftIcon} onClick={onClickBack} label="Home" />
      </Box>

      {getContent()}
    </Box>
  )
}