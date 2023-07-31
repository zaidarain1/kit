import { Chain } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import { EmailLogoDark, EmailLogoLight } from './EmailLogo'

window.Buffer = window.Buffer || require("buffer").Buffer;

export interface EmailOptions {
  chains: Chain[];
}

export const email = ({ chains }: EmailOptions) => ({
  id: 'email',
  logoDark: EmailLogoDark,
  logoLight: EmailLogoLight,
  // iconBackground: '#fff',
  name: 'Email',
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