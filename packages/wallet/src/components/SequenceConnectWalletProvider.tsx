import React, { useState } from 'react'
import {
  Modal,
  Box,
  Text,
  ThemeProvider,
  GradientAvatar
} from '@0xsequence/design-system'
import { AnimatePresence } from 'framer-motion'
import { useAccount } from 'wagmi'
import { truncateAtMiddle } from '../utils/helpers'

import { CopyButton  } from './CopyButton'

import { WalletModalContext } from '../contexts'

import '@0xsequence/design-system/styles.css'

export declare const THEME: readonly ["dark", "light"];
export declare type Theme = typeof THEME[number];
export const THEMES = {
  dark: 'dark' as Theme,
  light: 'light' as Theme
};

export type SequenceConnectWalletProvider = {
  children: React.ReactNode,
  theme?: Theme
}

export const SequenceConnectWalletProvider = ({ children, theme }: SequenceConnectWalletProvider) => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const { address } = useAccount()

  return (
    <WalletModalContext.Provider value={{ setOpenWalletModal }}>
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          {openWalletModal && (
            <Modal scroll={false} backdropColor="transparent" size="sm" onClose={() => setOpenWalletModal(false)}>
              <Box paddingY="16" paddingX="8">
                <Box justifyContent="center" alignItems="center"><Text variant="xlarge">My Wallet</Text></Box>
                  <Box paddingTop="2" alignItems="center" cursor="pointer">
                    <GradientAvatar address={address || ''} />
                    <Text marginLeft="2">
                      {truncateAtMiddle(address || '', 12)}
                    </Text>
                    <CopyButton text={address || ''} />
                  </Box>
              </Box>
              <Box>USD$123</Box>
              <Box>
                Coins
              </Box>
            </Modal>
          )}
        </AnimatePresence>
      </ThemeProvider>
      {children}
    </WalletModalContext.Provider>
  )
}
