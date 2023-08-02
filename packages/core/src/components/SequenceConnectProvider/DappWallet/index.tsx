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

import { ConnectModalContext } from '../../../contexts'
import { WalletList } from '../DappWallet/WalletList'

import '@0xsequence/design-system/styles.css'
import { SequenceConnectProviderProps } from '../index'

interface DappWalletProps extends SequenceConnectProviderProps {
  openConnectModal: boolean
  setOpenConnectModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const DappWallet = (props: DappWalletProps) => {
  const {
    openConnectModal,
    setOpenConnectModal,
    children,
    config = {}
  } = props
  const { theme = 'dark', signIn = {} } = config
  const { logoUrl } = signIn

  const [clickedGoBack, setClickedGoBack] = useState(false)
  const { pendingConnector, isError, connect } = useConnect()
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
      <WalletList
        theme={theme}
        logoUrl={logoUrl}
      />
    )
  }


  return (
    <>
      {getModalContent()}
    </>
  )
}