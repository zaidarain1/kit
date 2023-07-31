import { Chain } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import { FacebookLogo } from './FacebookLogo'

window.Buffer = window.Buffer || require("buffer").Buffer;

export interface FacebookOptions {
  chains: Chain[];
}

export const facebook = ({ chains }: FacebookOptions) => ({
  id: 'facebook',
  logoDark: FacebookLogo,
  logoLight: FacebookLogo,
  // iconBackground: '#fff',
  name: 'Facebook',
  createConnector: () => {
    const connector = new MetaMaskConnector({
      chains,
      options: {
        shimDisconnect: true,
      },
    });
    return connector
  }
})