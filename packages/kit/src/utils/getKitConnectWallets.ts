import React from 'react'
import { CreateConnectorFn } from 'wagmi'

export interface WalletProperties {
  id: string,
  logoDark: React.FunctionComponent,
  logoLight: React.FunctionComponent,
  monochromeLogoDark?: React.FunctionComponent,
  monochromeLogoLight?: React.FunctionComponent,
  name: string,
  iconBackground?: string,
  hideConnectorId?: string | null,
  isSequenceBased?: boolean,
}

export type Wallet = WalletProperties & {
  createConnector: () => CreateConnectorFn<any, any, any>
}

export interface WalletField {
  _wallet: WalletProperties
} 

export type ExtendedConnector = CreateConnectorFn<any, any, any> & WalletField

export const getKitConnectWallets = (wallets: Wallet[]) => {
  const connectors: CreateConnectorFn<any, any, any>[] = []

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

    const convertToExtendedConnector = (connector: CreateConnectorFn<any, any, any>, walletProperties: WalletProperties) => {
      const result = connector as ExtendedConnector
      result._wallet = { ...walletProperties }
      return result
    }

    const extendedConnector = convertToExtendedConnector(connector, walletProperties)

    connectors.push(extendedConnector)
  })

  return connectors
}