import React, { useEffect, useState } from 'react'
import {
  Badge,
  Button,
  Box,
  CloseIcon,
  Spinner,
  Text,
} from '@0xsequence/design-system'
import { useConnect, useAccount } from 'wagmi'

import { WalletList } from './WalletList'

import '@0xsequence/design-system/styles.css'
import { useTheme } from '../../../hooks'
import { KitConnectProviderProps } from '../index'

interface DappWalletProps extends KitConnectProviderProps {
  openConnectModal: boolean
  setOpenConnectModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const DappWallet = (props: DappWalletProps) => {
  const {
    openConnectModal,
    setOpenConnectModal,
    config = {}
  } = props
  const { theme } = useTheme()
  const { signIn = {} } = config
  const { logoUrlDarkMode, logoUrlLightMode } = signIn
  const logoUrl = theme === 'dark' ? logoUrlDarkMode : logoUrlLightMode

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