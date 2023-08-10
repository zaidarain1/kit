import React from 'react'
import { Box } from '@0xsequence/design-system'

import { HEADER_HEIGHT } from '../constants'

export interface CoinDetailsProps {
  contractAddress: string
  chainId: number
}

export const CoinDetails = ({
  contractAddress,
  chainId
}: CoinDetailsProps) => {
  return (
    <Box style={{ paddingTop: HEADER_HEIGHT }}>
      <Box padding="5" paddingTop="3">
        coin details
        contractAddress: {contractAddress}
        chainId: {chainId}
      </Box>
    </Box>
  )
}