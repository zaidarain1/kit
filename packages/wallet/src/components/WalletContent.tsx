import React from 'react'
import {
  Box,
} from '@0xsequence/design-system'
import { useAccount } from 'wagmi'


import { Header } from './Header'
import { CoinsSummary } from './CoinsSummary'

export const WalletContent = () => {
  return (
    <Box paddingY="16" paddingX="8">
      <Box marginTop="4" marginBottom="6">
        <Header />
      </Box>
      <CoinsSummary />
      <Box>Collection</Box>
    </Box>
  )
}