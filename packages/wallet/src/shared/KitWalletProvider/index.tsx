import { ethers } from 'ethers'
import React, { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Box,
  Modal,
  ThemeProvider,
  Scroll,
} from '@0xsequence/design-system'
import { useTheme } from '@0xsequence/kit-core'
import { AnimatePresence } from 'framer-motion'

import { getHeader, getContent } from './utils'

import {
  Navigation,
  NavigationContext,
  WalletModalContext,
  SettingsContext,
  FiatCurrency
} from '../../contexts'

import { HEADER_HEIGHT } from '../../constants'
import * as styles from '../styles.css'

import '@0xsequence/design-system/styles.css'

export type KitWalletProvider = {
  children: React.ReactNode,
}

const DEFAULT_LOCATION: Navigation = {
  location: 'home',
}

// const DEFAULT_LOCATION: Navigation = {
//   location: 'coin-details',
//   params: {
//     contractAddress: ethers.constants.AddressZero,
//     chainId: 137,
//     backLocation: {
//       location: 'home'
//     }
//   }
// }

export const KitWalletProvider = ({ children }: KitWalletProvider) => {
  const { theme } = useTheme()
  
  // Wallet Modal Context
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
 
  // Navigation Context
  const [navigation, setNavigation] = useState<Navigation>(DEFAULT_LOCATION)

  // Settings Context
  const [hideUnlistedTokens, setHideUnlistedTokens] = useState<boolean>(true)
  const [hideCollectibles, setHideCollectibles] = useState<boolean>(false)
  const [fiatCurrency, setFiatCurrency] = useState<FiatCurrency>('USD')

  const isHome = navigation.location === 'home'
  const displayScrollbar = isHome

  const queryClient = new QueryClient()

  useEffect(() => {
    if (openWalletModal) {
      setNavigation(DEFAULT_LOCATION)
    }
  }, [openWalletModal])

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsContext.Provider value={{
        hideUnlistedTokens,
        setHideUnlistedTokens,
        hideCollectibles,
        setHideCollectibles,
        fiatCurrency,
        setFiatCurrency,
      }}>
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
                        {getHeader(navigation)}
                      
                        {displayScrollbar ? (
                          <Scroll style={{ paddingTop: HEADER_HEIGHT, height: '800px' }}>
                            {getContent(navigation)}
                          </Scroll>
                        ) : (
                          getContent(navigation)
                        )}

                      </Box>
                    </Modal>
                  )}
                </AnimatePresence>
              </ThemeProvider>
              {children}
          </NavigationContext.Provider>
        </WalletModalContext.Provider>
      </SettingsContext.Provider>
    </QueryClientProvider>
  )
}
