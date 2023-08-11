import React from 'react'
import { TokenBalance } from '@0xsequence/indexer'

import { CollectibleTileImage } from '../../../../../shared/CollectibleTileImage'

interface CollectibleTileProps {
  balance: TokenBalance
}

export const CollectibleTile = ({
  balance
}: CollectibleTileProps) => {

  return (
    <CollectibleTileImage imageUrl={balance?.tokenMetadata?.image} />
  )
}