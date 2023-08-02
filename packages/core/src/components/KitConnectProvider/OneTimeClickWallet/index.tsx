import React from 'react'
import { Box } from '@0xsequence/design-system'

import { KitConnectProviderProps } from '../index'

interface OneTimeClickWalletProps extends KitConnectProviderProps {
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