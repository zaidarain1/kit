import type { Wallet } from '@0xsequence/kit'
import { sequenceWallet, BaseSequenceConnectorOptions } from '../wagmiConnectors';

import { getTwitchLogo } from './TwitchLogo'

export interface TwitchOptions extends BaseSequenceConnectorOptions {
}

export const twitch = (options: TwitchOptions) => ({
  id: 'twitch',
  isSequenceBased: true,
  logoDark: getTwitchLogo({}),
  logoLight: getTwitchLogo({}),
  monochromeLogoDark: getTwitchLogo({ isDarkMode: true }),
  monochromeLogoLight: getTwitchLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Twitch',
  createConnector: () => {
    const connector = sequenceWallet({
      ...options,
      connect: {
        ...options?.connect,
        settings: {
          ...options?.connect?.settings,
          signInWith: 'twitch'
        }
      }
    });
    return connector
  }
}) as Wallet