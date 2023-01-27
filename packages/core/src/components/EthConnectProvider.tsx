import React, { useEffect, useState } from 'react'
import { Modal, Box, Text, ThemeProvider } from '@0xsequence/design-system'
import { AnimatePresence } from 'framer-motion'
// TODO: figure out the problem with the pnpm setup and use the wagmi hooks
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
                            {connectInfo.isLoading && connectInfo.pendingConnector?.id === connector.id
                            && (' (Connecting...)')}
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
              </Box>
            </Modal>
          )}
        </AnimatePresence>
      </ThemeProvider>
      {children}
    </ConnectModalContext.Provider>
  )

}
