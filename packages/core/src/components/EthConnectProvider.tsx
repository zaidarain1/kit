import { useEffect } from 'react'
import { Modal, Box, Button, Text, ThemeProvider } from '@0xsequence/design-system'
import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useConnect, useAccount, useClient } from 'wagmi'

import { ConnectModalContext } from '../contexts'
import * as styles from './styles.css'

import '@0xsequence/design-system/styles.css'

export type EthConnectProvider = {
  children: React.ReactNode,
  wagmi: any
}

export const EthConnectProvider = ({ children, wagmi }: EthConnectProvider) => {
  const [openConnectModal, setOpenConnectModal] = useState<boolean>(false)
  const connectInfo = wagmi.useConnect()
  const accountInfo = wagmi.useAccount()
  console.log('connect info...', connectInfo)
  console.log('account info...', accountInfo)

  useEffect(() => {
    if (accountInfo.isConnected && openConnectModal) {
      setOpenConnectModal(false)
    }
  }, [accountInfo.isConnected, openConnectModal])

  return (
    <ConnectModalContext.Provider value={{ setOpenConnectModal }}>
      <ThemeProvider>
        <AnimatePresence>
          {openConnectModal && (
            <Modal size="sm" onClose={() => setOpenConnectModal(false)}>
              <Box paddingY="16" paddingX="8">
                <Box justifyContent="center" alignItems="center"><Text variant="xlarge">EthConnect</Text></Box>
                <Box marginY="4" justifyContent="center" alignItems="center"><Text variant="medium">Select a wallet to connect</Text></Box>
                <Box gap="4" flexDirection="column">
                  {/* @ts-ignore-next-line */}
                  {connectInfo.connectors.map((connector) => {
                      return (
                        <Box
                          key={connector.id}
                          as="button"
                          width="full"
                          background="backgroundSecondary"
                          color= "white"
                          borderRadius="circle"
                          padding="4"
                          className={styles.networkButton}
                          onClick={() => connectInfo.connect({ connector })}
                        >
                          <Text variant="medium">
                            {connector.name}
                            {connectInfo.isLoading && connectInfo.pendingConnector?.id === connector.id
                            && (' Connecting...')}
                          </Text>
                        </Box>
                      )
                    })
                  }
                </Box>
              </Box>
            </Modal>
          )}
        </AnimatePresence>
      </ThemeProvider>
      {children}
    </ConnectModalContext.Provider>
  )

}
