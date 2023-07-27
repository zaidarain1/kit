import React from 'react'
import { Box, vars } from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'

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

  return (
    <Box
      style={{
        width: `calc(50% - ${vars.space[2]})`
      }}
    >
      123
    </Box>
  )
}