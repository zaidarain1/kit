import React from 'react'
import {
  Box,
  Text,
  GradientAvatar
} from '@0xsequence/design-system'
import { useAccount } from 'wagmi'

import { truncateAtMiddle } from '../utils/helpers'

import { CopyButton  } from './CopyButton'

export const WalletContent = () => {
  const { address } = useAccount()

  return (
    <>
      <Box paddingY="16" paddingX="8">
        <Box justifyContent="center" alignItems="center"><Text variant="xlarge">My Wallet</Text></Box>
          <Box paddingTop="2" alignItems="center" cursor="pointer">
            <GradientAvatar address={address || ''} />
            <Text marginLeft="2">
              {truncateAtMiddle(address || '', 12)}
            </Text>
            <Box marginLeft="2">
              <CopyButton text={address || ''} />
            </Box>
          </Box>
      </Box>
      <Box>USD$123</Box>
      <Box>
        Coins
      </Box>
    </>
  )
}