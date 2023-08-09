import { Box, Text } from '@0xsequence/design-system'
import React from 'react'
import { HEADER_HEIGHT } from '../constants'

export const History = () => {

  return (
    <Box style={{ paddingTop: HEADER_HEIGHT }}>
      <Box padding="5" paddingTop="3">
        <Text as="h1" variant="normal" fontWeight="bold" color="text100" textAlign="center">
          Transaction History
        </Text>
      </Box>
    </Box>
  )
}