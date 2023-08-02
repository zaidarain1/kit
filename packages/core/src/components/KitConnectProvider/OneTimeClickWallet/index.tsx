import React, { useState } from 'react'
import { Box, Button, Card, ChevronRightIcon, Divider, Image, Text, TextInput } from '@0xsequence/design-system'
import { useConnect } from 'wagmi'

import { isEmailValid } from '../../../utils'
import { KitConnectProviderProps } from '../index'
import { ExtendedConnector } from '../../../utils/getKitConnectWallets'

import * as styles from '../../styles.css'

interface OneTimeClickWalletProps extends KitConnectProviderProps {
  openConnectModal: boolean
  setOpenConnectModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const OneTimeClickWallet = (props: OneTimeClickWalletProps) => {
  const {
    openConnectModal,
    setOpenConnectModal,
    config = {}
  } = props
  const { theme = 'dark', signIn = {} } = config

  const [email, setEmail] = useState('')
  const { connectors: baseConnectors, connect, isLoading } = useConnect()
  const connectors = baseConnectors as ExtendedConnector[]

  const emailConnector = connectors.find(c => c._wallet.id === 'email')
  const otherConnectors = connectors.filter(c => c._wallet.id !== 'email')

  const onChangeEmail = (ev: React.ChangeEventHandler<HTMLInputElement>) => {
    /* @ts-ignore-next-line */
    setEmail(ev.target.value)
  }

  return (
    <Box marginTop="5">
      {emailConnector && (
        <>
          <form
            onSubmit={() => connect({ connector: emailConnector })}
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
          <Box justifyContent="center" alignItems="center">
            <Text variant="small" color="text50">or sign in via</Text>
          </Box>
          <Box marginTop="3" gap="3" flexDirection="row" justifyContent="space-between" alignItems="center">
            {otherConnectors.map(connector => {
              const Logo =
                theme === 'dark'
                  ? connector._wallet.otcLogoDark as React.FunctionComponent
                  : connector._wallet.otcLogoLight as React.FunctionComponent
              return (
                <Card
                  key={connector._wallet.id}
                  className={styles.clickable}
                  aspectRatio="1/1"
                  justifyContent="center"
                  alignItems="center"
                  onClick={() => connect({ connector })}
                >
                  <Box className={styles.walletLogoContainerOtc}>
                    <Logo />
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