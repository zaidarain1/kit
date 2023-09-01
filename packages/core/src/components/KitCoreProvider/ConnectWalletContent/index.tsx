import React, { useState, useEffect } from 'react'
import { Box, Button, Card, ChevronLeftIcon, ChevronRightIcon, Divider, Text, TextInput, vars } from '@0xsequence/design-system'
import { useConnect, useAccount } from 'wagmi'
import{ EMAIL_CONNECTOR_LOCAL_STORAGE_KEY } from '@0xsequence/kit-connectors'

import { ExtendedWalletList } from './ExtendedWalletList'
import { Banner } from './Banner'

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
  const { config = {} } = props

  const {
    openConnectModal,
    setOpenConnectModal,
  } = props
  
  const [email, setEmail] = useState('')
  const { connectors: baseConnectors, connect, isLoading } = useConnect()
  const connectors = baseConnectors as ExtendedConnector[]
  const [showExtendedList, setShowExtendedList] = useState<boolean>(false)

  const emailConnector = connectors.find(c => c._wallet.id === 'email')
  const otherConnectors = connectors.filter(c => c._wallet.id !== 'email')
  const displayExtendedListButton = otherConnectors.length > 6

  const onChangeEmail = (ev: React.ChangeEventHandler<HTMLInputElement>) => {
    /* @ts-ignore-next-line */
    setEmail(ev.target.value)
  }

  useEffect(() => {
    if (isConnected && openConnectModal) {
      setOpenConnectModal(false)
    }
  }, [isConnected, openConnectModal])

  const onConnect = (connector: ExtendedConnector) => {
    if (connector._wallet.id === 'email') {
      const email = prompt('Auto-email login, please specify the email address:')
      localStorage.setItem(EMAIL_CONNECTOR_LOCAL_STORAGE_KEY, email || '')
    }
    connect({ connector })
  }

  const onConnectInlineEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem(EMAIL_CONNECTOR_LOCAL_STORAGE_KEY, email)
    connect({ connector: emailConnector })
  }

  if (showExtendedList) {
    return (
      <>
        <Box
          as="button"
          position="absolute"
          style={{ top: '20px' }}
          onClick={() => setShowExtendedList(false)}
          className={styles.clickable}
        >
          <ChevronLeftIcon />
        </Box>
        <ExtendedWalletList connectors={otherConnectors} onConnect={onConnect} />
      </>
    )
  }

  return (
    <>
      <Banner config={config} />
      <Box marginTop="5">
        {emailConnector && (
          <>
            <form
              onSubmit={onConnectInlineEmail}
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
              {otherConnectors.slice(0, 6).map(connector => {
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
                      onClick={() => onConnect(connector)}
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
            {displayExtendedListButton && (
              <Box
                padding="4"
                marginTop="3"
                background="backgroundSecondary"
                width="full"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="md"
                color="text100"
                as="button"
                className={styles.clickable}
                onClick={() => setShowExtendedList(true)}
              >
                <Text variant="medium">More options</Text>
                <ChevronRightIcon />
              </Box>
            )}
          </>
        )}
      </Box>
    </>
  )
}