import React from 'react'
import { Box } from '@0xsequence/design-system'

import { HEADER_HEIGHT } from '../constants'

export interface CollectibleDetailsProps {
  contractAddress: string
  chainId: number
  tokenId: string
}

export const CollectibleDetails = ({
  contractAddress,
  chainId,
  tokenId,
}: CollectibleDetailsProps) => {
  return (
    <Box style={{ paddingTop: HEADER_HEIGHT }}>
      <Box padding="5" paddingTop="3">
        collectible details
        contractAddress: {contractAddress}
        chainId: {chainId}
        tokenId: {tokenId}
      </Box>
    </Box>
  )
}