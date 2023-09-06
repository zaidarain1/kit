import React from 'react'
import { ethers } from 'ethers'
import { Box, Text } from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'

import { CoinTileContent } from './CoinTileContent'

import { getNativeTokenInfoByChainId } from '@0xsequence/kit'

import {
  computeBalanceFiat,
  formatDisplay,
  getPercentagePriceChange,
  compareAddress,
} from '../../../../../utils'

import {
  useCoinPrices,
  useConversionRate ,
  useSettings
} from '../../../../../hooks'

interface CoinTileProps {
  balance: TokenBalance
}

export const CoinTile = ({
  balance
}: CoinTileProps) => {
  const { fiatCurrency } = useSettings()
  const isNativeToken = compareAddress(balance.contractAddress, ethers.constants.AddressZero)
  const nativeTokenInfo = getNativeTokenInfoByChainId(balance.chainId)

  const { data: dataCoinPrices = [], isLoading: isLoadingCoinPrice } = useCoinPrices({
    tokens: [{
      chainId: balance.chainId,
      contractAddress: balance.contractAddress
    }]
  })

  const {
    data: conversionRate = 1,
    isLoading: isLoadingConversionRate
  } = useConversionRate({
    toCurrency: fiatCurrency.symbol
  })

  const isLoading = isLoadingCoinPrice || isLoadingConversionRate
  if (isLoading) {
    return (
      <Box
        background="backgroundSecondary"
        width="full"
        height="full"
        borderRadius="md"
      />
    )
  }

  if (isNativeToken) {
    const computedBalance = computeBalanceFiat(balance, dataCoinPrices, conversionRate)
    const priceChangePercentage = getPercentagePriceChange(balance, dataCoinPrices)
    const formattedBalance = ethers.utils.formatUnits(balance.balance, nativeTokenInfo.decimals)
    const balanceDisplayed = formatDisplay(formattedBalance)
  
    return (
      <CoinTileContent
        networkLogoUrl={nativeTokenInfo.logoURI}
        logoUrl={nativeTokenInfo.logoURI}
        tokenName={nativeTokenInfo.name}
        balance={balanceDisplayed}
        balanceFiat={computedBalance}
        priceChangePercentage={priceChangePercentage}
        symbol={nativeTokenInfo.symbol}
      />
    )
  }

  const computedBalance = computeBalanceFiat(balance, dataCoinPrices, conversionRate)
  const priceChangePercentage = getPercentagePriceChange(balance, dataCoinPrices)
  
  const decimals = balance.contractInfo?.decimals ?? 18
  const formattedBalance = ethers.utils.formatUnits(balance.balance, decimals)
  const balanceDisplayed = formatDisplay(formattedBalance)

  const name = balance.contractInfo?.name || 'Unknown'
  const symbol = balance.contractInfo?.name || 'TOKEN'
  const url = balance.contractInfo?.logoURI

  return (
    <CoinTileContent
      networkLogoUrl={nativeTokenInfo.logoURI}
      logoUrl={url}
      tokenName={name}
      balance={balanceDisplayed}
      balanceFiat={computedBalance}
      priceChangePercentage={priceChangePercentage}
      symbol={symbol}
    />
  )
}