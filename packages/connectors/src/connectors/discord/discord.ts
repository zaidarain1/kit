import { Chain } from 'wagmi'
import { BaseSequenceConnector, BaseSequenceConnectorOptions } from '../wagmiConnectors';

import { getDiscordLogo } from './DiscordLogo'

export interface DiscordOptions {
  chains: Chain[];
  options: BaseSequenceConnectorOptions;
}

export const discord = ({ chains, options }: DiscordOptions) => ({
  id: 'discord',
  isSequenceBased: true,
  logoDark: getDiscordLogo({ isDarkMode: true }),
  logoLight: getDiscordLogo({ isDarkMode: false }),
  monochromeLogoDark: getDiscordLogo({ isDarkMode: true }),
  monochromeLogoLight: getDiscordLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Discord',
  createConnector: () => {
    const connector = new BaseSequenceConnector({
      chains,
      options: {
        ...options,
        // @ts-ignore
        connect: {
          ...options?.connect,
          settings: {
            ...options?.connect?.settings,
            signInWith: 'discord'
          }
        }
      }
    });
    return connector
  }
})