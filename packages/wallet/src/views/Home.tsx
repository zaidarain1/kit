import React from 'react'
import {
  Box,
} from '@0xsequence/design-system'

import { Header } from '../components/Header'
import { CoinsSummary } from '../components/CoinsSummary'
import { CollectionsSummary } from '../components/CollectionsSummary'

export const Home = () => {
  return (
    <Box paddingX="4" paddingBottom="4" gap="4" flexDirection="column">
      <Box>
        <Header />
      </Box>
      <Box>
        <CoinsSummary />
      </Box>
      <Box>
        <CollectionsSummary />
      </Box>
    </Box>
  )
}