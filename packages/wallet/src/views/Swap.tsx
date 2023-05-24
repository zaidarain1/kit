import { Box, Text } from '@0xsequence/design-system'
import React from 'react'
import { HomeButton } from '../components/HomeButton'

export const Swap = () => {

  return (
    <Box padding="4"gap="4" flexDirection="column">
      <Box style={{ float: 'left', marginTop: '-16px' }}>
        <HomeButton />
      </Box>
      <Box>
        <Text as="h1" variant="normal" fontWeight="bold" color="text100" textAlign="center">
          Swap
        </Text>
      </Box>
    </Box>
  )
}