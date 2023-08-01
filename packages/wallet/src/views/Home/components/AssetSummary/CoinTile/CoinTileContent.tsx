import React from 'react'
import { Box, Text } from '@0xsequence/design-system'

import { getPercentageColor } from '../../../../../utils'
import { CoinIcon } from '../../../../../shared/CoinIcon'

interface CoinTileContentProps {
  logoUrl?: string
  tokenName: string
  balance: string
  balanceFiat: string
  priceChangePercentage: number,
  symbol: string
}

export const CoinTileContent = ({
  logoUrl,
  tokenName,
  balance,
  balanceFiat,
  priceChangePercentage,
  symbol,
}: CoinTileContentProps) => {
  const priceChangeSymbol =  priceChangePercentage > 0 ? '+' : ''

  return (
    <Box
      background="backgroundSecondary"
      width="full"
      height="full"
      borderRadius="md"
      padding="4"
    >
      <Box>
        <CoinIcon imageUrl={logoUrl} />
      </Box>
      <Box>
        <Box>
          <Text>{tokenName}</Text>
          <CoinIcon imageUrl={logoUrl} />
        </Box>
        <Text>{`${balance} ${symbol}`}</Text>
      </Box>
      <Box>
        {`$${balanceFiat}`}
      </Box>
      <Box>
        <Text
          style={{ color: getPercentageColor(priceChangePercentage) }}
        >
          {`${priceChangeSymbol}${priceChangePercentage.toFixed(2)}%`}
        </Text>
      </Box>
    </Box>
  )
}