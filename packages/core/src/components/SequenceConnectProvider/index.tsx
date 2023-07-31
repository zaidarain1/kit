import React, { useEffect, useState } from 'react'
import {
  Modal,
  Badge,
  Button,
  Box,
  CloseIcon,
  Spinner,
  Text,
  ThemeProvider,
} from '@0xsequence/design-system'
import { AnimatePresence } from 'framer-motion'
import { useConnect, useAccount } from 'wagmi'

import { ConnectModalContext } from '../../contexts'
import { WalletList } from './WalletList'

import * as styles from '../styles.css'

import '@0xsequence/design-system/styles.css'

export declare const THEME: readonly ["dark", "light"];
export declare type Theme = typeof THEME[number];
export const THEMES = {
  dark: 'dark' as Theme,
  light: 'light' as Theme
};

export type SequenceConnectProvider = {
  children: React.ReactNode,
  theme?: Theme
}

export const SequenceConnectProvider = ({ children, theme }: SequenceConnectProvider) => {
  const [openConnectModal, setOpenConnectModal] = useState<boolean>(false)
  const [clickedGoBack, setClickedGoBack] = useState(false)
  const { connectors: baseConnectors, pendingConnector, isError, connect, isLoading } = useConnect()
  const { isConnected } = useAccount()

  useEffect(() => {
    if (!isError || !pendingConnector) {
      setClickedGoBack(false)
    }
  }, [isError, pendingConnector])

  useEffect(() => {
    if (isConnected && openConnectModal) {
      setOpenConnectModal(false)
    }
  }, [isConnected, openConnectModal])

  const getModalContent = () => {
    if (pendingConnector && isError && !clickedGoBack) {
      return (
        <Box flexDirection="column" justifyContent="center" alignItems="center" gap="6" marginTop="4">
          <Text variant="medium">An error occurred while connecting to {pendingConnector.name}</Text>
          <Box><Badge value={<CloseIcon />} variant="error" size="lg" /></Box>
          <Button onClick={() => connect({ connector: pendingConnector })} label="Retry" />
          <Button onClick={() => setClickedGoBack(true)} label="Go Back" />
        </Box>
      )
    }

    if (pendingConnector && !isError && !clickedGoBack) {
      return (
        <Box flexDirection="column" justifyContent="center" alignItems="center" gap="6" marginTop="4">
          <Text variant="medium">Connecting to {pendingConnector.name}...</Text>
          <Box><Spinner size="lg" /></Box>
          <Button onClick={() => setClickedGoBack(true)} label="Go Back" />
        </Box>
      )
    }

    return (
      <WalletList />
    )
  }

  return (
    <ConnectModalContext.Provider value={{ setOpenConnectModal }}>
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          {openConnectModal && (
            <Modal
              scroll={false}
              backdropColor="transparent"
              size="sm"
              contentProps={{ style: {
                  width: '364px',
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
                {getModalContent()}
              </Box>
            </Modal>
          )}
        </AnimatePresence>
      </ThemeProvider>
      {children}
    </ConnectModalContext.Provider>
  )
}
