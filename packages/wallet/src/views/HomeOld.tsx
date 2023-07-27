import React from 'react'
import {
  Box,
} from '@0xsequence/design-system'

import { HomeHeader } from './Home/components/HomeHeader'
import { ActionButtons } from '../components/ActionButtons'
import { CoinsSummary } from '../components/CoinsSummary'
import { CollectionsSummary } from '../components/CollectionsSummary'

export const Home = () => {
  return (
    <Box paddingX="4" paddingBottom="4" gap="4" flexDirection="column">
      <Box>
        <HomeHeader />
      </Box>
      <Box>
        <ActionButtons />
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