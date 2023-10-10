import { Chain } from 'wagmi'
import { BaseSequenceConnector, BaseSequenceConnectorOptions } from '../wagmiConnectors';

import { getEmailLogo } from './EmailLogo'

export const EMAIL_CONNECTOR_LOCAL_STORAGE_KEY = '@sequence.kit.connector.email'

export interface EmailOptions {
  chains: Chain[];
  options?: BaseSequenceConnectorOptions;
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

    const connector = new BaseSequenceConnector({
      chains,
      options: {
        ...options,
        // @ts-ignore
        connect: {
          ...options?.connect,
          settings: {
            ...options?.connect?.settings,
            signInOptions: ['email'],
            signInWithEmail: email || ''
          }
        }
      }
    });

    return connector
  }
})