import React from 'react'
import {
  Box,
  Text,
  GradientAvatar
} from '@0xsequence/design-system'
import { useAccount } from 'wagmi'

import { truncateAtMiddle } from '../utils/helpers'

import { CopyButton  } from './CopyButton'

export const Header = () => {
  const { address } = useAccount()

  return (
    <Box justifyContent="space-between" alignItems="center">
      <Box gap="2" alignItems="center">
        <GradientAvatar address={address || ''} />
        <Box gap="1" flexDirection="column" alignItems="flex-start" justifyContent="center">
          <Text variant="normal" marginLeft="2">
            {`0x${truncateAtMiddle(address?.substring(2) || '', 8)}`}
          </Text>
          <CopyButton text={address || ''} />
        </Box>
      </Box>
      <Box>
        Balance: 12343132.11 $USD
      </Box>
    </Box>
  )
}