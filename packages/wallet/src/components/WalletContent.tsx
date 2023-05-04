import React from 'react'
import {
  Box,
  Text,
  GradientAvatar
} from '@0xsequence/design-system'
import { useAccount, useNetwork } from 'wagmi'

import { truncateAtMiddle } from '../utils/helpers'

import { CoinsSummary } from './CoinsSummary'
import { CopyButton  } from './CopyButton'

export const WalletContent = () => {
  const { address } = useAccount()

  return (
    <Box paddingY="16" paddingX="8">
      <Box paddingTop="2" gap="2" alignItems="center">
        <GradientAvatar address={address || ''} />
        <Box gap="1" flexDirection="column" alignItems="flex-start" justifyContent="center">
          <Text variant="normal" marginLeft="2">
            {truncateAtMiddle(address || '', 12)}
          </Text>
          <CopyButton text={address || ''} />
        </Box>
      </Box>
      <Box>USD$123</Box>
      <CoinsSummary />
      <Box>Collection</Box>
    </Box>
  )
}