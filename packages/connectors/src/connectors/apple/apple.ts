import { Chain } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import { AppleLogoDark, AppleLogoLight } from './AppleLogo'

window.Buffer = window.Buffer || require("buffer").Buffer;

export interface AppleOptions {
  chains: Chain[];
}

export const apple = ({ chains }: AppleOptions) => ({
  id: 'apple',
  logoDark: AppleLogoDark,
  logoLight: AppleLogoLight,
  // iconBackground: '#fff',
  name: 'Apple',
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