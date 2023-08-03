import { Chain } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import { getDiscordLogo } from './DiscordLogo'

window.Buffer = window.Buffer || require("buffer").Buffer;

export interface DiscordOptions {
  chains: Chain[];
}

export const discord = ({ chains }: DiscordOptions) => ({
  id: 'discord',
  logoDark: getDiscordLogo({ isDarkMode: true }),
  logoLight: getDiscordLogo({ isDarkMode: false }),
  otcLogoDark: getDiscordLogo({ isDarkMode: true }),
  otcLogoLight: getDiscordLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Discord',
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