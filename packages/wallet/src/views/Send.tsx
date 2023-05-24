import { Box, Text } from '@0xsequence/design-system'
import React, { useEffect, useState } from 'react'
import { HomeButton } from '../components/HomeButton'

export const Send = () => {
  useEffect(() => {

  }, [])

  return (
    <Box padding="4"gap="4" flexDirection="column">
      <Box style={{ float: 'left', marginTop: '-16px' }}>
        <HomeButton />
      </Box>
      <Box>
        <Text as="h1" variant="normal" fontWeight="bold" color="text100" textAlign="center" marginTop="10" marginBottom="6">
          Send
        </Text>
      </Box>
    </Box>
  )
}