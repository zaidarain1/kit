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

export interface WalletField {
  _wallet: WalletProperties
} 

export type ExtendedConnector = Connector & WalletField

export const getEthConnectWallets = (wallets: Wallet[]) => {
  const connectors: Connector[] = []

  wallets.forEach(wallet => {
    const { createConnector, ...metaProperties } = wallet
    const connector = wallet.createConnector()
    const walletProperties = { ...metaProperties }

    const convertToExtendedConnector = (connector: Connector, walletProperties: WalletProperties) => {
      const result = connector as ExtendedConnector
      result._wallet = { ...walletProperties }
      return result
    }

    const extendedConnector = convertToExtendedConnector(connector, walletProperties)

    connectors.push(extendedConnector)
  })

  return connectors
}