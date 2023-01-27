import { Chain } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import { MetamaskWalletLogo } from './MetamaskWalletLogo'

export interface MetamaskWalletOptions {
  chains: Chain[];
}

export const metamaskWallet = ({ chains }: MetamaskWalletOptions) => ({
  id: 'metamask',
  logo: MetamaskWalletLogo,
  // iconBackground: '#fff',
  name: 'Metamask',
  createConnector: () => {
    const connector = new MetaMaskConnector({
      chains,
    });
    return connector
  }
})