import React from 'react'
import {
  Box,
} from '@0xsequence/design-system'
import { PaperTransaction } from '../components/PaperTransaction'

export const Home = () => {
  return (
    <Box paddingX="4" paddingBottom="4" gap="4" flexDirection="column">
      <Box>
        <PaperTransaction />
      </Box>
    </Box>
  )
}