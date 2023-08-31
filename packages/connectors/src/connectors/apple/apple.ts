import { Chain } from 'wagmi'
import { SocialConnector, SocialConnectorOptions } from '../wagmiConnectors';

import { getAppleLogo } from './AppleLogo'

window.Buffer = window.Buffer || require("buffer").Buffer;

export interface AppleOptions {
  chains: Chain[];
  options?: SocialConnectorOptions;
}

export const apple = ({ chains, options = {} }: AppleOptions) => ({
  id: 'apple',
  logoDark: getAppleLogo({ isDarkMode: true }),
  logoLight: getAppleLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Apple',
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
            signInOptions: ['apple']
          }
        }
      }
    });
    return connector
  }
})