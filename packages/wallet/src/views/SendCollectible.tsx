import React from 'react'
import { Box } from '@0xsequence/design-system'

import { HEADER_HEIGHT } from '../constants'

interface SendCollectibleProps {
  chainId: number
  contractAddress: string
  tokenId: string
}

export const SendCollectible = ({
  chainId,
  contractAddress,
  tokenId
}: SendCollectibleProps) => {

  return (
    <Box
      padding="5"
      paddingTop="3"
      style={{
        marginTop: HEADER_HEIGHT
      }}
    >
      send collectible flow
      <Box>
        {`chainId: ${chainId}`}
      </Box>
      <Box>
        {`contractAddress: ${contractAddress}`}
      </Box>
      <Box>
        {`tokenId: ${tokenId}`}
      </Box>
    </Box>
  )
}