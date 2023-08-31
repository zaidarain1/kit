import React, { useState, useEffect } from 'react'
import { Box, Button, Card, ChevronRightIcon, Divider, Text, TextInput, vars } from '@0xsequence/design-system'
import { useConnect, useAccount } from 'wagmi'
import{ EMAIL_CONNECTOR_LOCAL_STORAGE_KEY } from '@0xsequence/kit-connectors'

import { useTheme } from '../../../hooks'
import { isEmailValid } from '../../../utils'
import { KitConnectProviderProps } from '../index'
import { ExtendedConnector } from '../../../utils/getKitConnectWallets'

import * as styles from '../../styles.css'

interface ConnectWalletContentProps extends KitConnectProviderProps {
  openConnectModal: boolean
  setOpenConnectModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ConnectWalletContent = (props: ConnectWalletContentProps) => {
  const { isConnected } = useAccount()
  const { theme } = useTheme()

  const {
    openConnectModal,
    setOpenConnectModal,
  } = props
  
  const [email, setEmail] = useState('')
  const { connectors: baseConnectors, connect, isLoading } = useConnect()
  const connectors = baseConnectors as ExtendedConnector[]

  const emailConnector = connectors.find(c => c._wallet.id === 'email')
  const otherConnectors = connectors.filter(c => c._wallet.id !== 'email')

  const onChangeEmail = (ev: React.ChangeEventHandler<HTMLInputElement>) => {
    /* @ts-ignore-next-line */
    setEmail(ev.target.value)
  }

  useEffect(() => {
    if (isConnected && openConnectModal) {
      setOpenConnectModal(false)
    }
  }, [isConnected, openConnectModal])

  const onConnect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem(EMAIL_CONNECTOR_LOCAL_STORAGE_KEY, email)
    connect({ connector: emailConnector })
  }

  return (
    <Box marginTop="5">
      {emailConnector && (
        <>
          <form
            onSubmit={onConnect}
          >
            <TextInput
              /* @ts-ignore-next-line */
              onChange={onChangeEmail}
              value={email}
              name="email"
              placeholder="Enter email"
            />
            <Button
              type="submit"
              disabled={!isEmailValid(email)}
              marginTop="4"
              width="full"
              label="Continue"
              rightIcon={ChevronRightIcon}
            />
          </form>
          <Box>
            <Divider />
          </Box>
        </>
      )}
      {otherConnectors.length > 0 && (
        <>
          {emailConnector && (
            <Box justifyContent="center" alignItems="center">
              <Text variant="small" color="text50">or sign in via</Text>
            </Box>
          )}
          <Box
            marginTop="3"
            gap="3"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            {otherConnectors.map(connector => {
              const Logo =
                theme === 'dark'
                  ? connector._wallet.logoDark as React.FunctionComponent
                  : connector._wallet.logoLight as React.FunctionComponent
              return (
                  <Card
                  key={connector._wallet.id}
                  className={styles.clickable}
                  justifyContent="center"
                  alignItems="center"
                  onClick={() => connect({ connector })}
                  style={{
                    height: '110px',
                    width: `calc(50% - ${vars.space[2]})`
                  }}
                >
                  <Box
                    className={styles.walletLogoContainer}
                    flexDirection="column"
                    gap="4"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Logo />
                    <Text
                      fontSize="normal"
                      fontWeight="bold"
                    >
                      {connector._wallet.name}
                    </Text>
                  </Box>
                </Card>
              )
            })}
          </Box>
        </>
      )}
    </Box>
  )
}