import React from 'react'
import {
  Box,
} from '@0xsequence/design-system'


import { Header } from '../components/Header'
import { CoinsSummary } from '../components/CoinsSummary'

export const Home = () => {
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