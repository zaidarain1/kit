import { Chain } from 'wagmi'
import { BaseSequenceConnector, BaseSequenceConnectorOptions } from '../wagmiConnectors';

import { getAppleLogo, getAppleMiniLogo } from './AppleLogo'

export interface AppleOptions {
  chains: Chain[];
  options?: BaseSequenceConnectorOptions;
}

export const apple = ({ chains, options = {} }: AppleOptions) => ({
  id: 'apple',
  isSequenceBased: true,
  logoDark: getAppleLogo({ isDarkMode: true }),
  logoLight: getAppleLogo({ isDarkMode: false }),
  miniLogoDark: getAppleMiniLogo({ isDarkMode: true }),
  miniLogoLight: getAppleMiniLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Apple',
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
            signInWith: 'apple'
          }
        }
      }
    });
    return connector
  }
})