import React from 'react'

import { Box, Text, vars } from '@0xsequence/design-system'
import { useConnect } from 'wagmi'

import { ExtendedConnector } from '../../utils/getSequenceConnectWallets'

import * as styles from '../styles.css'

export const WalletList = () => {
  const { connectors: baseConnectors, connect, isLoading } = useConnect()
  const connectors = baseConnectors as ExtendedConnector[]

  return (
    <>
      <Text>TODO: logo here as config... + create empty connector for social</Text>
      <Box
        gap="4"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        flexDirection="row"
        marginTop="4"
      >
        {connectors.map((connector) => {
            const Logo = connector._wallet.logo as React.FunctionComponent
            const walletName = connector._wallet.name

            return (
              <Box
                key={connector.id}
                as="button"
                marginTop="3"
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