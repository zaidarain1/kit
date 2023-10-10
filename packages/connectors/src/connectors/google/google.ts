import { Chain } from 'wagmi'
import { BaseSequenceConnector, BaseSequenceConnectorOptions } from '../wagmiConnectors';

import { GoogleLogo, getMiniGoogleLogo } from './GoogleLogo'

export interface GoogleOptions {
  chains: Chain[];
  options?: BaseSequenceConnectorOptions;
}

export const google = ({ chains, options = {} }: GoogleOptions) => ({
  id: 'google',
  isSequenceBased: true,
  logoDark: GoogleLogo,
  logoLight: GoogleLogo,
  miniLogoDark: getMiniGoogleLogo({ isDarkMode: true }),
  miniLogoLight: getMiniGoogleLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Google',
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
            signInWith: 'google'
          }
        }
      }
    });
    return connector
  }
})