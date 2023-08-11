import React from 'react'
import { Box, Button, SendIcon, Text } from '@0xsequence/design-system'

import { NetworkBadge } from '../../shared/NetworkBadge'
import { Skeleton } from '../../shared/Skeleton'

import { HEADER_HEIGHT } from '../../constants'

interface CoinDetailsSkeletonProps {
  chainId: number
}

export const CoinDetailsSkeleton = ({
  chainId
}: CoinDetailsSkeletonProps) => {
  return (
    <Box style={{ paddingTop: HEADER_HEIGHT }}>
      <Box flexDirection="column" gap="10" padding="5" paddingTop="0" style={{ marginTop: '-20px' }}>
        <Box marginBottom="10" gap="2" alignItems="center" justifyContent="center" flexDirection="column">
          <Skeleton width="32px" height="32px" />
          <Skeleton height="24px" width="70px" />
          <NetworkBadge chainId={chainId} />
        </Box>
        <Box>
          <Text fontWeight="medium" color="text50" fontSize="normal">Balance</Text>
          <Box flexDirection="row" alignItems="flex-end" justifyContent="space-between">
            <Skeleton width="150px" height="36px" />
            <Skeleton width="33px" height="17px" />
          </Box>
        </Box>
        <Button
          marginTop="4"
          marginBottom="10"
          width="full"
          variant="primary"
          leftIcon={SendIcon}
          label="Send"
          disabled
          onClick={() => {}}
        />
        <Box>
          <Text fontSize="normal" color="text50" fontWeight="medium">This week</Text>
          <Box>TODO: history</Box>
        </Box>
      </Box>
    </Box>
  )}