import { Chain } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import { getAppleLogo, getAppleOtcLogo } from './AppleLogo'

window.Buffer = window.Buffer || require("buffer").Buffer;

export interface AppleOptions {
  chains: Chain[];
}

export const apple = ({ chains }: AppleOptions) => ({
  id: 'apple',
  logoDark: getAppleLogo({ isDarkMode: true }),
  logoLight: getAppleLogo({ isDarkMode: false }),
  otcLogoDark: getAppleOtcLogo({ isDarkMode: true }),
  otcLogoLight: getAppleOtcLogo({ isDarkMode: false }),
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