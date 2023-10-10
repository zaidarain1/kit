import { Chain } from 'wagmi'
import { BaseSequenceConnector, BaseSequenceConnectorOptions } from '../wagmiConnectors';

import { getTwitchLogo } from './TwitchLogo'

export interface TwitchOptions {
  chains: Chain[];
  options?: BaseSequenceConnectorOptions;
}

export const twitch = ({ chains, options = {} }: TwitchOptions) => ({
  id: 'twitch',
  isSequenceBased: true,
  logoDark: getTwitchLogo({ isDarkMode: true }),
  logoLight: getTwitchLogo({ isDarkMode: false }),
  miniLogoDark: getTwitchLogo({ isDarkMode: true }),
  miniLogoLight: getTwitchLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Twitch',
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
            signInWith: 'twitch'
          }
        }
      }
    });
    return connector
  }
})