import { Chain } from 'wagmi'
import { SocialConnector, SocialConnectorOptions } from '../wagmiConnectors';

import { getEmailLogo } from './EmailLogo'

export const EMAIL_CONNECTOR_LOCAL_STORAGE_KEY = '@sequence.kit.connector.email'

export interface EmailOptions {
  chains: Chain[];
  options?: SocialConnectorOptions;
}

export const email = ({ chains, options = {} }: EmailOptions) => ({
  id: 'email',
  isSequenceBased: true,
  logoDark: getEmailLogo({ isDarkMode: true }),
  logoLight: getEmailLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Email',
  createConnector: () => {
    const email = localStorage.getItem(EMAIL_CONNECTOR_LOCAL_STORAGE_KEY)

    const connector = new SocialConnector({
      chains,
      options: {
        ...options,
        // @ts-ignore
        connect: {
          ...options?.connect,
          settings: {
            ...options?.connect?.settings,
            signInWithEmail: email || ''
          }
        }
      }
    });

    return connector
  }
})