import React, { useState } from 'react'

import {
  Modal,
  Box,
  Text,
  ThemeProvider,
} from '@0xsequence/design-system'
import { AnimatePresence } from 'framer-motion'

import { DappWallet } from './DappWallet'
import { OneTimeClickWallet } from './OneTimeClickWallet'
import { ConnectModalContext } from '../../contexts'

import '@0xsequence/design-system/styles.css'

export declare const THEME: readonly ["dark", "light"];
export declare type Theme = typeof THEME[number];
export const THEMES = {
  dark: 'dark' as Theme,
  light: 'light' as Theme
};

export type KitConnectProviderProps = {
  children: React.ReactNode,
  config?: {
    useOneTimeClickModal?: boolean,
    theme?: Theme,
    signIn?: {
      logoUrl?: string
    }
  },
}

export const KitConnectProvider = (props: KitConnectProviderProps) => {
  const { config = {}, children } = props
  const { useOneTimeClickModal = false, theme } = config
  const [openConnectModal, setOpenConnectModal] = useState<boolean>(false)


  const getConnectModal = () => {
    if (useOneTimeClickModal) {
      return (
        <OneTimeClickWallet
          openConnectModal={openConnectModal}
          setOpenConnectModal={setOpenConnectModal}
          {...props}
        />
      )
    }
    return (
      <DappWallet
        openConnectModal={openConnectModal}
        setOpenConnectModal={setOpenConnectModal}
        {...props}
      />
    )
  }

  return (
    <ConnectModalContext.Provider value={{ setOpenConnectModal }}>
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          {openConnectModal && (
            <Modal
              scroll={true}
              backdropColor="transparent"
              size="sm"
              contentProps={{
                style: {
                  maxWidth: '364px',
                }
              }}
              onClose={() => setOpenConnectModal(false)}
            >
              <Box padding="4">
                <Box
                  justifyContent="center"
                  color="text100"
                  alignItems="center"
                  fontWeight="medium"
                  style={{
                    marginTop: '4px'
                  }}
                >
                  <Text>Sign in</Text>
                </Box>
                    {openConnectModal && getConnectModal()}
                </Box>
              </Modal>
            )}
          </AnimatePresence>
        </ThemeProvider>
        {children}
      </ConnectModalContext.Provider>
  )
}
