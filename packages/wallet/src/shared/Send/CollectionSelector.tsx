import React from 'react'
import { Box, Image, Text } from '@0xsequence/design-system'

import { CoinIcon } from '../CoinIcon'

interface CollectionSelectorProps {
  imageUrl?: string,
  name: string,
  quantity: string,
}

export const CollectionSelector = ({
  imageUrl,
  name,
  quantity
}: CollectionSelectorProps) => {
  
  return (
    <Box
      height="14"
      alignItems="center"
      justifyContent="flex-start"
      background="backgroundSecondary"
      borderRadius="md"
      paddingY="2"
      paddingX="3"
    >
      <Box justifyContent="center" alignItems="center" gap="2">
        <CoinIcon imageUrl={imageUrl} size={30} />
        <Box flexDirection="column" alignItems="flex-start">
          <Text
            variant="medium"
            style={{
              whiteSpace: 'nowrap',
              width: '275px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {name}
          </Text>
          <Text color="text50" variant="normal"> {`${quantity} items`}</Text>
        </Box>
      </Box>
    </Box>
  )
}