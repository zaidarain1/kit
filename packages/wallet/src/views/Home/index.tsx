import React from 'react'
import {
  Box,
} from '@0xsequence/design-system'

import { HomeHeader } from './components/HomeHeader'
import { ActionButtons } from '../../shared/ActionButtons'
import { CoinsSummary } from '../../shared/CoinsSummary'
import { CollectionsSummary } from '../../shared/CollectionsSummary'

export const Home = () => {
  return (
    <Box paddingX="4" paddingBottom="4" gap="4" flexDirection="column">
      <Box>
        <HomeHeader />
      </Box>
    </Box>
  )
}