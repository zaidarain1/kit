import React, { useState } from 'react'
import {
  Modal,
  Box,
  Text,
  ThemeProvider,
} from '@0xsequence/design-system'
import { AnimatePresence } from 'framer-motion'

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

  return (
    <WalletModalContext.Provider value={{ setOpenWalletModal }}>
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          {openWalletModal && (
            <Modal scroll={false} backdropColor="transparent" size="sm" onClose={() => setOpenWalletModal(false)}>
              <Box paddingY="16" paddingX="8">
                <Box justifyContent="center" alignItems="center"><Text variant="xlarge">My Wallet</Text></Box>
                 Welcome, ADDRESS + ICON
              </Box>
            </Modal>
          )}
        </AnimatePresence>
      </ThemeProvider>
      {children}
    </WalletModalContext.Provider>
  )
}
