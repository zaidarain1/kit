import React from 'react'
import { Box, Card, Image } from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'

interface CollectibleTileContentProps {
  balance: TokenBalance
}

export const CollectibleTileContent = ({
  balance
}: CollectibleTileContentProps) => {
  const imageUrl = balance?.tokenMetadata?.image

  return (
      <Card
        padding="0"
        aspectRatio="1/1"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        borderRadius="md"
        background="backgroundSecondary"
      >
        <Image style={{ height: '100%' }} src={imageUrl} />
      </Card>
  )
}