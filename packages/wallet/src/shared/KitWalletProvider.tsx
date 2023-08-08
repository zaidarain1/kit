import React, { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Box,
  Modal,
  ThemeProvider,
  Scroll,
} from '@0xsequence/design-system'
import { AnimatePresence } from 'framer-motion'

import {
  AllCoins,
  AllCollectibles,
  AllCollections,
  Home,
  Send,
  History,
  SettingsMenu,
  SettingsCurrency,
  SettingsNetwork,
  SettingsGeneral
} from '../views'
import { WalletHeader } from './WalletHeader'
import { NavigationHeader } from './NavigationHeader'
import {
  Navigation,
  NavigationContext,
  WalletModalContext,
} from '../contexts'

import { HEADER_HEIGHT } from '../constants'

import '@0xsequence/design-system/styles.css'

export declare const THEME: readonly ["dark", "light"];
export declare type Theme = typeof THEME[number];
export const THEMES = {
  dark: 'dark' as Theme,
  light: 'light' as Theme
};

export type KitWalletProvider = {
  children: React.ReactNode,
  theme?: Theme
}

// const DEFAULT_LOCATION = 'home'
const DEFAULT_LOCATION = 'settings'

export const KitWalletProvider = ({ children, theme }: KitWalletProvider) => {
  // Wallet Modal Context
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
 
  // Navigation Context
  const [navigation, setNavigation] = useState<Navigation>({
    location: DEFAULT_LOCATION
  })

  const isHome = navigation.location === 'home'

  const queryClient = new QueryClient()

  const getHeader = () => {
    const { location } = navigation
    switch (location) {
      case 'settings':
        return (
          <NavigationHeader
            primaryText="Settings"
            secondaryText="Wallet / "
            backLocation={{
              location: 'home'
            }}
          />
        )
      case 'all-coins':
      case 'all-collections':
      case 'all-collectibles':
      case 'send':
      case 'history':
      case 'settings-general':
      case 'settings-currency':
      case 'settings-networks':
      case 'home':
      default:
        return <WalletHeader />
    }
  }
 
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
      case 'settings':
        return <SettingsMenu />
      case 'settings-general':
        return <SettingsGeneral />
      case 'settings-currency':
        return <SettingsCurrency />
      case 'settings-networks':
        return <SettingsNetwork />
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
                  <Modal contentProps={{ style: { maxWidth: '400px' } }} scroll={!isHome} backdropColor="transparent" onClose={() => setOpenWalletModal(false)}>
                    <Box id="sequence-kit-wallet-content" style={{ height: '800px' }}>
                      {getHeader()}
                      <Scroll style={{ paddingTop: HEADER_HEIGHT }}>
                        {getContent()}
                      </Scroll>
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
