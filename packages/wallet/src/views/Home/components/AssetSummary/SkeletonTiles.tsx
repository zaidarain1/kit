import React from 'react'
import { Box, vars } from '@0xsequence/design-system'
import { Skeleton } from '../../../../shared/Skeleton'

export const SkeletonTiles = () => {
  return (
    <Box flexDirection="row" gap="2" flexWrap="wrap" style={{flexBasis: '50%'}}>
      {Array(6).fill(null).map((_, i) => (
        (
          <Box
            key={i}
            style={{
              width: `calc(50% - ${vars.space[2]})`
            }}
          >
            <Skeleton height="100%" width="100%" aspectRatio='1/1' />
          </Box>
        )
      ))}
    </Box>
  )
}