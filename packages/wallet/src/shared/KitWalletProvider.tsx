import React, { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Box,
  Card,
  Modal,
  ThemeProvider,
  Scroll,
} from '@0xsequence/design-system'
import { useTheme } from '@0xsequence/kit-core'
import { AnimatePresence } from 'framer-motion'

import {
  AllCoins,
  AllCollectibles,
  AllCollections,
  Home,
  Receive,
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
import * as styles from './styles.css'

import '@0xsequence/design-system/styles.css'

export type KitWalletProvider = {
  children: React.ReactNode,
}

const DEFAULT_LOCATION = 'home'
// const DEFAULT_LOCATION = 'settings-networks'

export const KitWalletProvider = ({ children }: KitWalletProvider) => {
  const { theme } = useTheme()
  
  // Wallet Modal Context
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
 
  // Navigation Context
  const [navigation, setNavigation] = useState<Navigation>({
    location: DEFAULT_LOCATION
  })

  const isHome = navigation.location === 'home'
  const displayScrollbar = isHome

  const queryClient = new QueryClient()

  const getHeader = () => {
    const { location } = navigation
    switch (location) {
      case 'settings':
        return (
          <NavigationHeader
            secondaryText="Wallet / "
            primaryText="Settings"
            backLocation={{
              location: 'home'
            }}
          />
        )
      case 'settings-general':
        return (
          <NavigationHeader
            secondaryText="Wallet / Settings / "
            primaryText="General"
            backLocation={{
              location: 'settings'
            }}
          />
        )
      case 'settings-currency':
        return (
          <NavigationHeader
            secondaryText="Wallet / Settings / "
            primaryText="Currency"
            backLocation={{
              location: 'settings'
            }}
          />
        )
      case 'settings-networks':
        return (
          <NavigationHeader
            secondaryText="Wallet / Settings / "
              primaryText="Networks"
              backLocation={{
                location: 'settings'
              }}
          />
        )
      case 'receive':
        return (
          <NavigationHeader
            secondaryText="Wallet / "
              primaryText="Receive"
              backLocation={{
                location: 'home'
              }}
          />
        )
      case 'history':
        return (
          <NavigationHeader
            secondaryText="Wallet / "
              primaryText="History"
              backLocation={{
                location: 'home'
              }}
          />
        )
      case 'all-coins':
      case 'all-collections':
      case 'all-collectibles':
      case 'send':
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
      case 'receive':
        return <Receive />
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
      <WalletModalContext.Provider value={{ setOpenWalletModal }}>
        <NavigationContext.Provider value={{ setNavigation, navigation }}>
            <ThemeProvider theme={theme}>
              <AnimatePresence>
                {openWalletModal && (
                  <Modal
                    contentProps={{
                      style: {
                        maxWidth: '400px', height: 'fit-content',
                      },
                    }}
                    scroll={false}
                    backdropColor="transparent"
                    onClose={() => setOpenWalletModal(false)}
                  >
                    <Box className={styles.walletContent} id="sequence-kit-wallet-content">
                      {getHeader()}
                    
                      {displayScrollbar ? (
                        <Scroll style={{ paddingTop: HEADER_HEIGHT, height: '800px' }}>
                          {getContent()}
                        </Scroll>
                      ) : (
                        getContent()
                      )}

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
