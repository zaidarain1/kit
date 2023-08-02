import React from 'react'
import { Box } from '@0xsequence/design-system'

import { SequenceConnectProviderProps } from '../index'

interface OneTimeClickWalletProps extends SequenceConnectProviderProps {
  openConnectModal: boolean
  setOpenConnectModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const OneTimeClickWallet = (props: OneTimeClickWalletProps) => {
  return (
    <Box>
      stuff goes here
    </Box>
  )
}