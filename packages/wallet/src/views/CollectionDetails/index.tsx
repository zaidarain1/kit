import React from 'react'
import { Box } from '@0xsequence/design-system'

interface CollectionDetailsProps {
  chainId: string
  contractAddress: string
}

export const CollectionDetails = ({
  chainId,
  contractAddress
}: CollectionDetailsProps) => {
  return (
    <Box
      padding="5"
      paddingTop="3"
    >
      <Box>
        collection details
      </Box>
      <Box>
        {contractAddress}
      </Box>
      <Box>
        {chainId}
      </Box>
    </Box>
  )
}