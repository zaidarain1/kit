import { Chain } from 'wagmi'
import {  SocialConnector, SocialConnectorOptions } from '../wagmiConnectors';

import { getDiscordLogo } from './DiscordLogo'

window.Buffer = window.Buffer || require("buffer").Buffer;

export interface DiscordOptions {
  chains: Chain[];
  options?: SocialConnectorOptions;
}

export const discord = ({ chains, options = {} }: DiscordOptions) => ({
  id: 'discord',
  logoDark: getDiscordLogo({ isDarkMode: true }),
  logoLight: getDiscordLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Discord',
  createConnector: () => {
    const connector = new SocialConnector({
      chains,
      options: {
        ...options,
        // @ts-ignore
        connect: {
          ...options?.connect,
          settings: {
            ...options?.connect?.settings,
            signInOptions: ['discord']
          }
        }
      }
    });
    return connector
  }
})