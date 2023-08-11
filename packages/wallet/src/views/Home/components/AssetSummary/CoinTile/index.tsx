import React from 'react'
import { ethers } from 'ethers'
import { Box, Text } from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'

import { CoinTileContent } from './CoinTileContent'
import { CoinIcon } from '../../../../../shared/CoinIcon'
import {
  computeBalanceFiat,
  formatDisplay,
  getNativeTokenInfoByChainId,
  getPercentagePriceChange,
  getPercentageColor,
  compareAddress,
} from '../../../../../utils'
import { useCoinPrices } from '../../../../../hooks'

interface CoinTileProps {
  balance: TokenBalance
}

export const CoinTile = ({
  balance
}: CoinTileProps) => {
  const isNativeToken = compareAddress(balance.contractAddress, ethers.constants.AddressZero)

  const { data: dataCoinPrices = [], isLoading: isLoadingCoinPrice } = useCoinPrices({
    tokens: [{
      chainId: balance.chainId,
      contractAddress: balance.contractAddress
    }]
  })

  const isLoading = isLoadingCoinPrice
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
    const nativeTokenInfo = getNativeTokenInfoByChainId(balance.chainId)

    const computedBalance = computeBalanceFiat(balance, dataCoinPrices)
    const priceChangePercentage = getPercentagePriceChange(balance, dataCoinPrices)
    const formattedBalance = ethers.utils.formatUnits(balance.balance, nativeTokenInfo.decimals)
    const balanceDisplayed = formatDisplay(formattedBalance)
  
    return (
      <CoinTileContent
        logoUrl={nativeTokenInfo.logoURI}
        tokenName={nativeTokenInfo.name}
        balance={balanceDisplayed}
        balanceFiat={computedBalance}
        priceChangePercentage={priceChangePercentage}
        symbol={nativeTokenInfo.symbol}
      />
    )
  }

  const computedBalance = computeBalanceFiat(balance, dataCoinPrices)
  const priceChangePercentage = getPercentagePriceChange(balance, dataCoinPrices)
  
  const decimals = balance.contractInfo?.decimals ?? 18
  const formattedBalance = ethers.utils.formatUnits(balance.balance, decimals)
  const balanceDisplayed = formatDisplay(formattedBalance)

  const name = balance.contractInfo?.name || 'Unknown'
  const symbol = balance.contractInfo?.name || 'TOKEN'
  const url = balance.contractInfo?.logoURI

  return (
    <CoinTileContent
      logoUrl={url}
      tokenName={name}
      balance={balanceDisplayed}
      balanceFiat={computedBalance}
      priceChangePercentage={priceChangePercentage}
      symbol={symbol}
    />
  )
}