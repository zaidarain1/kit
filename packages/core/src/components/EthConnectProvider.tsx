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

import { ConnectModalContext } from '../contexts'
import { ExtendedConnector } from '../utils/getEthConnectWallets'

import * as styles from './styles.css'

import '@0xsequence/design-system/styles.css'

export type EthConnectProvider = {
  children: React.ReactNode,
}

export const EthConnectProvider = ({ children }: EthConnectProvider) => {
  const [openConnectModal, setOpenConnectModal] = useState<boolean>(false)
  const [clickedGoBack, setClickedGoBack] = useState(false)
  const { connectors: baseConnectors, pendingConnector, isError, connect, isLoading } = useConnect()
  const { isConnected } = useAccount()

  const connectors = baseConnectors as ExtendedConnector[]

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
      <>
        <Box marginY="4" justifyContent="center" alignItems="center"><Text variant="medium">Select a wallet to connect</Text></Box>
        <Box gap="4" flexDirection="column" justifyContent="center" alignItems="center">
          {connectors.map((connector) => {
              const Logo = connector._wallet.logo as React.FunctionComponent
              const walletName = connector._wallet.name

              return (
                <Box
                  key={connector.id}
                  as="button"
                  justifyContent="space-between"
                  alignItems="center"
                  background="buttonGlass"
                  color= "white"
                  borderRadius="circle"
                  paddingY="2"
                  paddingX="10"
                  className={styles.networkButton}
                  onClick={() => connect({ connector })}
                >
                  <Text variant="medium">
                    {walletName}
                    {isLoading}
                  </Text>
                  <Box
                    width="16"
                    justifyContent="center"
                    alignItems="center"
                    style={{ backgroundColor: connector._wallet.iconBackground }}
                    borderRadius="md"
                  >
                    <Box width="12">
                    <Logo />
                    </Box>
                  </Box>
                </Box>
              )
            })
          }
        </Box>
      </>
    )
  }

  return (
    <ConnectModalContext.Provider value={{ setOpenConnectModal }}>
      <ThemeProvider>
        <AnimatePresence>
          {openConnectModal && (
            <Modal className={styles.modal} size="sm" onClose={() => setOpenConnectModal(false)}>
              <Box paddingY="16" paddingX="8">
                <Box justifyContent="center" alignItems="center"><Text variant="xlarge">EthConnect</Text></Box>
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
