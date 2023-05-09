import React from 'react'
import {
  Box,
  Text,
  GradientAvatar
} from '@0xsequence/design-system'
import { useAccount } from 'wagmi'

import { formatAddress } from '../utils/helpers'

import { CopyButton  } from './CopyButton'

export const Header = () => {
  const { address } = useAccount()

  return (
    <>
      {/* 60px = total height of the X component which we cannot change */}
      <Box gap="2" alignItems="center" style={{ height: "60px" }}>
          <GradientAvatar address={address || ''} />
          <Box width="full" alignItems="center" justifyContent="center" style={{ marginLeft: '-56px' }} >
            <Text variant="normal">
              {formatAddress(address || '')}
            </Text>
            <CopyButton marginLeft="2" text={address || ''} />
          </Box>
      </Box>
      <Box marginTop="4" flexDirection="column" justifyContent="center" alignItems="center">
        <Box>
          <Text>Balance</Text>
        </Box>
        <Box>
          <Text>12343132.11 $USD</Text>
        </Box>
      </Box>
    </>
  )
}