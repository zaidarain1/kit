import React, { useState } from 'react'

import { Box, Image, Text, vars, ChevronLeftIcon, ChevronRightIcon } from '@0xsequence/design-system'
import { useConnect } from 'wagmi'

import { Theme } from '../index'
import { ExtendedConnector } from '../../../utils/getSequenceConnectWallets'

import * as styles from '../../styles.css'

interface ExtendedWalletListProps {
  theme: Theme
}

export const ExtendedWalletList = ({
  theme
}: ExtendedWalletListProps) => {
  const { connectors: baseConnectors, connect, isLoading } = useConnect()
  const connectors = baseConnectors as ExtendedConnector[]

  return (
    <Box
      flexDirection="column"
      gap="2"
      marginTop="5"
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
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            background="buttonGlass"
            color="text100"
            borderRadius="md"
            padding="4"
            style={{
              height: '60px',
            }}
            className={styles.networkButton}
            onClick={() => connect({ connector })}
          >
            <Text variant="medium">
              {walletName}
              {isLoading}
            </Text>
            <Box
              justifyContent="center"
              alignItems="center"
              style={{ backgroundColor: connector._wallet.iconBackground }}
              borderRadius="md"
              className={styles.walletLogoContainerExtended}
            >
              <Logo />
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}