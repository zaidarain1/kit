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
// TODO: figure out the problem with the pnpm setup and use the wagmi hooks
import { useConnect, useAccount, useClient, Connector } from 'wagmi'

import { ConnectModalContext } from '../contexts'
import * as styles from './styles.css'

import '@0xsequence/design-system/styles.css'

export type EthConnectProvider = {
  children: React.ReactNode,
  wagmi: any
}

export const EthConnectProvider = ({ children, wagmi }: EthConnectProvider) => {
  const [openConnectModal, setOpenConnectModal] = useState<boolean>(false)
  const [clickedGoBack, setClickedGoBack] = useState(false)
  const connectInfo = wagmi.useConnect()
  const accountInfo = wagmi.useAccount()
  const pendingConnector = connectInfo.pendingConnector
  const error = connectInfo.isError
  console.log('connect info...', connectInfo)
  console.log('account info...', accountInfo)

  useEffect(() => {
    if (!error || !pendingConnector) {
      setClickedGoBack(false)
    }
  }, [error, pendingConnector])

  useEffect(() => {
    if (accountInfo.isConnected && openConnectModal) {
      setOpenConnectModal(false)
    }
  }, [accountInfo.isConnected, openConnectModal])

  const getModalContent = () => {
    if (pendingConnector && error && !clickedGoBack) {
      return (
        <Box flexDirection="column" justifyContent="center" alignItems="center" gap="6" marginTop="4">
          <Text variant="medium">An error occurred while connecting to {pendingConnector.name}</Text>
          <Box><Badge value={<CloseIcon />} variant="error" size="lg" /></Box>
          <Button onClick={() => connectInfo.connect({ connector: pendingConnector })} label="Retry" />
          <Button onClick={() => setClickedGoBack(true)} label="Go Back" />
        </Box>
      )
    }

    if (pendingConnector && !error && !clickedGoBack) {
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
          {/* @ts-ignore-next-line */}
          {connectInfo.connectors.map((connector) => {
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
                  onClick={() => connectInfo.connect({ connector })}
                >
                  <Text variant="medium">
                    {walletName}
                    {connectInfo.isLoading}
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
