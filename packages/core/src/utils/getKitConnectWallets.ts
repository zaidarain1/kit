import React from 'react'
import { Connector } from 'wagmi'

export interface WalletProperties {
  id: string,
  logoDark: React.FunctionComponent,
  logoLight: React.FunctionComponent,
  name: string,
  iconBackground?: string,
  hideConnectorId?: string | null
}

export type Wallet = WalletProperties & {
  createConnector: () => Connector<any, any>
}

export interface WalletField {
  _wallet: WalletProperties
} 

export type ExtendedConnector = Connector & WalletField

export const getKitConnectWallets = (wallets: Wallet[]) => {
  const connectors: Connector[] = []

  // hide connector if there is an identical injected wallet
  const injectedWallet = wallets.find(connector => connector.id === 'injected')

  const filteredWallets = wallets.filter((wallet) => {
    if (!injectedWallet || !injectedWallet.hideConnectorId) {
      return true
    }
    return wallet.id !== injectedWallet.hideConnectorId
  })

  filteredWallets.forEach(wallet => {
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