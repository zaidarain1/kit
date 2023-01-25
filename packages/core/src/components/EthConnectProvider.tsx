import { Modal, Box, Text, ThemeProvider } from '@0xsequence/design-system'
import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useConnect, useAccount, useClient } from 'wagmi'

import { ConnectModalContext } from '../contexts'
import '@0xsequence/design-system/styles.css'

export type EthConnectProvider = {
  children: React.ReactNode
}

export const EthConnectProvider = ({ children }: EthConnectProvider) => {
  const [openConnectModal, setOpenConnectModal] = useState<boolean>(false)
  // const connectInfo = useConnect()
  // console.log('connect info from wagmi...', connectInfo)
  // const account = useAccount()
  // console.log('account...', account)
  // const client = useClient()
  // console.log('client....', client)

  return (
    <ConnectModalContext.Provider value={{ setOpenConnectModal }}>
      <ThemeProvider>
        <AnimatePresence>
          {openConnectModal && (
            <Modal size="sm" onClose={() => setOpenConnectModal(false)}>
              <Box paddingY="16" paddingX="8">
                <Box justifyContent="center" alignItems="center"><Text variant="xlarge">EthConnect</Text></Box>
                <Box marginY="4"><Text variant="medium">Select a wallet to connect</Text></Box>
              </Box>
            </Modal>
          )}
        </AnimatePresence>
      </ThemeProvider>
      {children}
    </ConnectModalContext.Provider>
  )

}
