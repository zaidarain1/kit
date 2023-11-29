import { Chain } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'

import { CoinbaseWalletLogo } from './CoinbaseWalletLogo'

export type CoinbaseWalletConnectorParams = ConstructorParameters<typeof CoinbaseWalletConnector>[0]

export const coinbaseWallet = (params: CoinbaseWalletConnectorParams) => ({
  id: 'coinbase-wallet',
  logoDark: CoinbaseWalletLogo,
  logoLight: CoinbaseWalletLogo,
  name: 'Coinbase Wallet',
  createConnector: () => {
    const connector = new CoinbaseWalletConnector({...params});
    return connector
  }
})