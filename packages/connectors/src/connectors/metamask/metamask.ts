import { Chain } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import { MetamaskLogo } from './MetamaskLogo'

export interface MetamaskOptions {
  chains: Chain[];
}

export const metamask = ({ chains }: MetamaskOptions) => ({
  id: 'metamask',
  logo: MetamaskLogo,
  // iconBackground: '#fff',
  name: 'Metamask',
  createConnector: () => {
    const connector = new MetaMaskConnector({
      chains,
    });
    return connector
  }
})