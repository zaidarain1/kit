import React from 'react'

import { Box, Image, Text, vars } from '@0xsequence/design-system'
import { useConnect } from 'wagmi'

import { Theme } from '../index'
import { ExtendedConnector } from '../../utils/getSequenceConnectWallets'

import * as styles from '../styles.css'

interface WalletListProps {
  logoUrl?: string
  theme: Theme
}

export const WalletList = ({
  logoUrl,
  theme
}: WalletListProps) => {
  const { connectors: baseConnectors, connect, isLoading } = useConnect()
  const connectors = baseConnectors as ExtendedConnector[]

  return (
    <>
      {logoUrl && (
        <Box justifyContent="center" alignItems="center">
          <Image
            src={logoUrl}
            alt="logo"
            marginTop="4"
          />
        </Box>
      )}
      <Box
        gap="4"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        flexDirection="row"
        marginTop="4"
      >
        {connectors.map((connector) => {
            const Logo = theme === 'dark'
              ? connector._wallet.logoDark as React.FunctionComponent
              : connector._wallet.logoLight as React.FunctionComponent
            const walletName = connector._wallet.name

            return (
              <Box
                key={connector.id}
                as="button"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                background="buttonGlass"
                color="text100"
                borderRadius="md"
                padding="4"
                style={{
                  height: '120px',
                  width: `calc(50% - ${vars.space[2]})`
                }}
                className={styles.networkButton}
                onClick={() => connect({ connector })}
              >
                <Box
                  marginTop="3"
                  justifyContent="center"
                  alignItems="center"
                  style={{ backgroundColor: connector._wallet.iconBackground }}
                  borderRadius="md"
                  className={styles.walletLogoContainer}
                >
                  <Logo />
                </Box>
                <Text variant="medium">
                  {walletName}
                  {isLoading}
                </Text>
              </Box>
            )
          })
        }
      </Box>
    </>
  )
}