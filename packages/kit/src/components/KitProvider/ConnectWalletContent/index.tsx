import React, { useState, useEffect } from 'react'
import { Box, Button, Card, ChevronLeftIcon, ChevronRightIcon, Divider, Text, TextInput, vars } from '@0xsequence/design-system'
import { useConnect, useAccount } from 'wagmi'
import{ EMAIL_CONNECTOR_LOCAL_STORAGE_KEY } from '@0xsequence/kit-connectors'

import { ExtendedWalletList } from './ExtendedWalletList'
import { Banner } from './Banner'

import { defaultSignInOptions } from '../../../constants'
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
  const { signIn = {} } = config
  const {
    showEmailInput = defaultSignInOptions.showEmailInput,
    authOptions = defaultSignInOptions.authOptions,
    miniAuthOptions = defaultSignInOptions.miniAuthOptions,
  } = signIn
  
  const {
    openConnectModal,
    setOpenConnectModal,
  } = props
  
  const [email, setEmail] = useState('')
  const { connectors: baseConnectors, connect, isLoading } = useConnect()
  const connectors = baseConnectors as ExtendedConnector[]
  const [showExtendedList, setShowExtendedList] = useState<boolean>(false)

  const emailConnector = connectors.find(c => c._wallet.id === 'email')
  const normalConnectors = connectors.filter(connector => {
    const foundOption = authOptions.find(authOption => authOption === connector._wallet.id)
    return !!foundOption
  })

  const miniConnectors = connectors.filter(connector => {
    const foundOption = miniAuthOptions.find(authOption => authOption === connector._wallet.id)
    return !!foundOption
  })

  const displayExtendedListButton = normalConnectors.length > 6

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
        <ExtendedWalletList connectors={normalConnectors} onConnect={onConnect} />
      </>
    )
  }

  return (
    <>
      <Banner config={config} />
      <Box marginTop="5">
        {emailConnector && showEmailInput && (
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
                data-1p-ignore
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
          </>
        )}
        {miniConnectors.length > 0 && (
          <>
            {emailConnector && showEmailInput && (
              <>
                <Box style={{ marginBottom: '-4px' }}>
                  <Divider color="backgroundSecondary" />
                </Box>
                <Box justifyContent="center" alignItems="center">
                  <Text variant="small" color="text50">or sign in via</Text>
                </Box>
              </>
            )}
            <Box
              marginTop="3"
              gap="2"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              {miniConnectors.slice(0, 6).map(connector => {
                const Logo =
                  theme === 'dark'
                    ? connector._wallet.miniLogoDark as React.FunctionComponent || connector._wallet.logoDark as React.FunctionComponent
                    : connector._wallet.miniLogoLight as React.FunctionComponent || connector._wallet.logoLight as React.FunctionComponent
                return (
                    <Card
                      key={connector._wallet.id}
                      className={styles.clickable}
                      justifyContent="center"
                      alignItems="center"
                      onClick={() => onConnect(connector)}
                      aspectRatio='1/1'
                      style={{
                        width: `calc(25% - ${vars.space[2]})`
                      }}
                    >
                    <Box
                      className={styles.walletLogoContainer}
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Logo />
                    </Box>
                  </Card>
                )
              })}
            </Box>
          </>
        )}
        {normalConnectors.length > 0 && (
          <>
            {((emailConnector && showEmailInput) || (miniConnectors.length > 0)) && (
              <>
                <Box style={{ marginBottom: '-4px' }}>
                  <Divider color="backgroundSecondary" />
                </Box>
                <Box justifyContent="center" alignItems="center">
                  <Text variant="small" color="text50">or select a wallet</Text>
                </Box>
              </>
            )}
            <Box
              marginTop="3"
              gap="3"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              {normalConnectors.slice(0, 6).map(connector => {
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