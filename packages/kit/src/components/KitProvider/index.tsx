import React, { useState, useEffect } from 'react'

import {
  Box,
  Modal,
  Text,
  ThemeProvider,
} from '@0xsequence/design-system'
import { AnimatePresence } from 'framer-motion'

import { ConnectWalletContent } from './ConnectWalletContent'
import { LocalStorageKey } from '../../constants'
import { ConnectModalContextProvider, ThemeContextProvider, WalletConfigContextProvider} from '../../contexts'
import { ModalPosition, getModalPositionCss } from '../../utils'

import '@0xsequence/design-system/styles.css'

import * as sharedStyles from '../styles.css'

export declare const THEME: readonly ["dark", "light"];
export declare type Theme = typeof THEME[number];
export const THEMES = {
  dark: 'dark' as Theme,
  light: 'light' as Theme
};

export interface DisplayedAsset {
  contractAddress: string,
  chainId: number,
}

export interface KitConfig {
  defaultTheme?: Theme,
  position?: ModalPosition,
  signIn?: {
    logoUrlDarkMode?: string,
    logoUrlLightMode?: string,
    projectName?: string,
    showEmailInput?: boolean,
    miniAuthOptions?: string[]
    authOptions?: string[]
  },
  displayedAssets?: DisplayedAsset[]
}

export type KitConnectProviderProps = {
  children: React.ReactNode,
  config?: KitConfig
}

export const KitProvider = (props: KitConnectProviderProps) => {
  const { config = {}, children } = props
  const {
    defaultTheme = 'dark',
    signIn = {},
    position = 'center',
    displayedAssets: displayedAssetsSetting = []
  } = config
  const { projectName } = signIn
  const [openConnectModal, setOpenConnectModal] = useState<boolean>(false)
  const [theme, setTheme] = useState<Theme>(defaultTheme || THEMES.dark)
  const [modalPosition, setModalPosition] = useState<ModalPosition>(position)
  const [displayedAssets, setDisplayedAssets] = useState<DisplayedAsset[]>(displayedAssetsSetting)

  // Write theme in local storage for retrieval in connectors
  useEffect(() => {
    localStorage.setItem(LocalStorageKey.Theme, theme)
  }, [theme])

  useEffect(() => {
    setDisplayedAssets(displayedAssets)
  }, [displayedAssetsSetting])

  return (
    <ThemeContextProvider
      value={{
        theme,
        setTheme,
        position: modalPosition,
        setPosition: setModalPosition
      }}
    >
      <ConnectModalContextProvider value={{ setOpenConnectModal, openConnectModalState: openConnectModal }}>
      <WalletConfigContextProvider value={{ setDisplayedAssets, displayedAssets }}>
          <ThemeProvider theme={theme}>
            <AnimatePresence>
              {openConnectModal && (
                <Modal
                  scroll={false}
                  backdropColor="backgroundBackdrop"
                  size="sm"
                  contentProps={{
                    style: {
                      maxWidth: '364px',
                      ...getModalPositionCss(position)
                    }
                  }}
                  onClose={() => setOpenConnectModal(false)}
                >
                  <Box
                    padding="4"
                    className={sharedStyles.walletContent}
                  >
                    <Box
                      justifyContent="center"
                      color="text100"
                      alignItems="center"
                      fontWeight="medium"
                      style={{
                        marginTop: '4px'
                      }}
                    >
                      <Text>Sign in {projectName ? `to ${projectName}` : ''}</Text>
                    </Box>
                    <ConnectWalletContent
                      openConnectModal={openConnectModal}
                      setOpenConnectModal={setOpenConnectModal}
                      {...props}
                    />
                  </Box>
                </Modal>
              )}
              </AnimatePresence>
            </ThemeProvider>
            {children}
          </WalletConfigContextProvider>
        </ConnectModalContextProvider>
    </ThemeContextProvider>
  )
}
