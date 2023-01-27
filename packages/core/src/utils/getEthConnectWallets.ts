import React from 'react'
import { Connector } from 'wagmi'

export interface WalletProperties {
  logo: React.FunctionComponent,
  name: string,
  iconBackground?: string,
}

export type Wallet = WalletProperties & {
  createConnector: () => Connector
}

export const getEthConnectWallets = (wallets: Wallet[]) => {
  const connectors: Connector[] = []

  wallets.forEach(wallet => {
    const { createConnector, ...metaProperties } = wallet
    const connector = wallet.createConnector()

    /* @ts-expect-error */
    connector._wallet = {...metaProperties}
    connectors.push(connector)
  })

  return connectors
}