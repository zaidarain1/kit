import React from 'react'
import { Box, Text } from '@0xsequence/design-system'

interface DefaultIconProps {
  size?: number
}

export const DefaultIcon = ({ size = 30 }: DefaultIconProps) => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      borderRadius="circle"
      background="backgroundInverse"
      style={{
        width: `${size}px`,
      }}
    >
      <Text display="inline-block" variant="large" color="textInverse100">?</Text>
    </Box>
  )
}