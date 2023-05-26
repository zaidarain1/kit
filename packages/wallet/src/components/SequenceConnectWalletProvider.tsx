import React, { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Box,
  Modal,
  ThemeProvider,
} from '@0xsequence/design-system'
import { AnimatePresence } from 'framer-motion'

import {
  AllCoins,
  AllCollectibles,
  AllCollections,
  Home,
  Send,
  Swap,
  History
} from '../views'
import {
  Navigation,
  NavigationContext,
  WalletModalContext,
} from '../contexts'

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

const DEFAULT_LOCATION = 'send'

export const SequenceConnectWalletProvider = ({ children, theme }: SequenceConnectWalletProvider) => {
  // Wallet Modal Context
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
 
  // Navigation Context
  const [navigation, setNavigation] = useState<Navigation>({
    location: DEFAULT_LOCATION
  })



  const queryClient = new QueryClient()

  const getContent = () => {
    const { location } = navigation
    switch (location) {
      case 'all-coins':
        return <AllCoins />
      case 'all-collections':
        return <AllCollections />
      case 'all-collectibles':
        const collectionAddress = navigation.params.collectionAddress
        return <AllCollectibles collectionAddress={collectionAddress} />
      case 'send':
        return <Send />
      case 'history':
        return <History />
      case 'swap':
        return <Swap />
      case 'home':
      default:
        return <Home />
    }
  }

  useEffect(() => {
    if (openWalletModal) {
      setNavigation({ location: DEFAULT_LOCATION })
    }
  }, [openWalletModal])

  return (
    <QueryClientProvider client={queryClient}>
      <WalletModalContext.Provider value={{ setOpenWalletModal, theme }}>
        <NavigationContext.Provider value={{ setNavigation, navigation }}>

            <ThemeProvider theme={theme}>
              <AnimatePresence>
                {openWalletModal && (
                  <Modal contentProps={{ style: { maxWidth: '400px' } }} scroll={true} backdropColor="transparent" onClose={() => setOpenWalletModal(false)}>
                    <Box id="sequence-kit-wallet-content">
                      {getContent()}
                    </Box>
                  </Modal>
                )}
              </AnimatePresence>
            </ThemeProvider>
            {children}
        </NavigationContext.Provider>
      </WalletModalContext.Provider>
    </QueryClientProvider>
  )
}
