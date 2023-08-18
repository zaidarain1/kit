import React from 'react'
import { Box, Icon, CheckmarkIcon, Card, Image, Text } from '@0xsequence/design-system'

interface CollectionSelectorProps {
  imageUrl?: string,
  name?: string,
  quantity: string,
  tokenId: string,
  isSelected: boolean,
}

export const CollectibleSelector = ({
  imageUrl,
  name,
  quantity,
  tokenId,
  isSelected,
}: CollectionSelectorProps) => {
  return (
    <Box
      height="14"
      alignItems="center"
      justifyContent="space-between"
      background="backgroundSecondary"
      borderRadius="sm"
      paddingY="2"
      paddingX="3"
    >
      <Box justifyContent="center" alignItems="center" gap="2">
        <Card height="12" padding="0" aspectRatio="1/1" justifyContent="center" alignItems="center" overflow="hidden" borderRadius="md" background="backgroundSecondary">
          <Image style={{ height: '100%' }} src={imageUrl} />
        </Card>

        <Box flexDirection="column" alignItems="flex-start">
          <Text
            variant="medium"
            style={{
              whiteSpace: 'nowrap',
              width: '200px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {name || tokenId}
          </Text>
          <Text color="text50" variant="normal"> {`x ${quantity}`}</Text>
        </Box>
      </Box>
      <Box>
        {isSelected && <CheckmarkIcon size="sm" />}
      </Box>
    </Box>
  )
}
