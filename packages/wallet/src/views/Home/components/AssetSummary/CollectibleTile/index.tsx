import React from 'react'
import { TokenBalance } from '@0xsequence/indexer'

import { CollectibleTileContent } from './CollectibleTileContent'

interface CollectibleTileProps {
  balance: TokenBalance
}

export const CollectibleTile = ({
  balance
}: CollectibleTileProps) => {

  return (
    <CollectibleTileContent balance={balance} />
  )
}