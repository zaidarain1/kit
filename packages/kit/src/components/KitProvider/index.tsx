import React, { useState, useEffect } from 'react'

import {
  Box,
  Modal,
  Text,
  ThemeProvider,
} from '@0xsequence/design-system'
import { AnimatePresence } from 'framer-motion'

import { ConnectWalletContent } from './ConnectWalletContent'
import { DEFAULT_SESSION_EXPIRATION, LocalStorageKey } from '../../constants'
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

export interface EthAuthSettings {
  app?: string,
  /** expiry number (in seconds) that is used for ETHAuth proof. Default is 1 week in seconds. */
  expiry?: number,
  /** origin hint of the dapp's host opening the wallet. This value will automatically
   * be determined and verified for integrity, and can be omitted. */
  origin?: string,
  /** authorizeNonce is an optional number to be passed as ETHAuth's nonce claim for replay protection. **/
  nonce?: number
}

export interface KitConfig {
  defaultTheme?: Theme,
  position?: ModalPosition,
  signIn?: {
    logoUrl?: string,
    projectName?: string,
    showEmailInput?: boolean,
    miniAuthOptions?: string[]
    authOptions?: string[]
  },
  displayedAssets?: DisplayedAsset[],
  ethAuth?: EthAuthSettings
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
    displayedAssets: displayedAssetsSetting = [],
    ethAuth = {} as EthAuthSettings
  } = config

  const defaultAppName = signIn.projectName || 'app'

  const { expiry = DEFAULT_SESSION_EXPIRATION, app = defaultAppName, origin = location.origin, nonce } = ethAuth

  const { projectName } = signIn
  const [openConnectModal, setOpenConnectModal] = useState<boolean>(false)
  const [theme, setTheme] = useState<Theme>(defaultTheme || THEMES.dark)
  const [modalPosition, setModalPosition] = useState<ModalPosition>(position)
  const [displayedAssets, setDisplayedAssets] = useState<DisplayedAsset[]>(displayedAssetsSetting)

  // Write data in local storage for retrieval in connectors
  useEffect(() => {
    // Theme
    localStorage.setItem(LocalStorageKey.Theme, theme)
    // EthAuth
    // note: keep an eye out for potential race-conditions, though they shouldn't occur.
    // If there are race conditions, the settings could be a function executed prior to being passed to wagmi
    localStorage.setItem(LocalStorageKey.EthAuthSettings, JSON.stringify({
      expiry, app, origin, nonce
    }))
  }, [theme, ethAuth])

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
