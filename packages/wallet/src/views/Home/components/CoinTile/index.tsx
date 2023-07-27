import React from 'react'
import { ethers } from 'ethers'
import { Box, Text } from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'

import { CoinTileContent } from './CoinTileContent'
import { CoinIcon } from '../../../../shared/CoinIcon'
import {
  computeBalance,
  formatDisplay,
  getNativeTokenInfoByChainId,
  getPercentagePriceChange,
  getPercentageColor
} from '../../../../utils'
import { useCoinPrices } from '../../../../hooks'

interface CoinTileProps {
  balance: TokenBalance
}

export const CoinTile = ({
  balance
}: CoinTileProps) => {
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

  const nativeTokenInfo = getNativeTokenInfoByChainId(balance.chainId)

  const computedBalance = computeBalance(balance, dataCoinPrices)
  const priceChangePercentage = getPercentagePriceChange(balance, dataCoinPrices)
  const priceChangeSymbol =  priceChangePercentage > 0 ? '+' : ''
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