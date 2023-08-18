import React from 'react'
import { Box, Text } from '@0xsequence/design-system'

import { getPercentageColor } from '../../../../../utils'
import { CoinIcon } from '../../../../../shared/CoinIcon'

interface CoinTileContentProps {
  networkLogoUrl: string
  logoUrl?: string
  tokenName: string
  balance: string
  balanceFiat: string
  priceChangePercentage: number,
  symbol: string
}

export const CoinTileContent = ({
  networkLogoUrl,
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
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      gap="1"
    >
      <Box marginBottom="1">
        <CoinIcon size={36} imageUrl={logoUrl} />
      </Box>
      <Box marginBottom="3">
        <Box flexDirection="row" gap="1" justifyContent="flex-start" alignItems="center">
          <Text fontWeight="bold" whiteSpace="nowrap">{tokenName}</Text>
          <CoinIcon size={12} imageUrl={networkLogoUrl} />
        </Box>
        <Text color="text50" whiteSpace="nowrap">{`${balance} ${symbol}`}</Text>
      </Box>
      <Box>
        <Box>
          <Text fontWeight="bold">{`$${balanceFiat}`}</Text>
        </Box>
        <Text
          style={{ color: getPercentageColor(priceChangePercentage) }}
        >
          {`${priceChangeSymbol}${priceChangePercentage.toFixed(2)}%`}
        </Text>
      </Box>
    </Box>
  )
}