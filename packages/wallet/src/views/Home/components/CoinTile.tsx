import React from 'react'
import { Box, vars } from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'

import { CoinIcon } from '../../../shared/CoinIcon'
import { getNativeTokenInfoByChainId } from '../../../utils'
import { useCoinPrices } from '../../../hooks'


interface CoinTileProps {
  balance: TokenBalance
}



export const CoinTile = ({
  balance
}: CoinTileProps) => {
  const { data: dataCoinPrice, isLoading: isLoadingCoinPrice } = useCoinPrices({
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

  console.log('data coin price...', dataCoinPrice, balance)
  console.log('native token info', nativeTokenInfo)

  return (
    <Box
      background="backgroundSecondary"
      width="full"
      height="full"
      borderRadius="md"
    >
      <CoinIcon imageUrl={nativeTokenInfo.logoURI} />
      {nativeTokenInfo.name}
      {nativeTokenInfo.symbol}

    </Box>
  )
}