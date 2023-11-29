import { Chain } from 'wagmi'
import { BaseSequenceConnector, BaseSequenceConnectorOptions } from '../wagmiConnectors';

import { FacebookLogo, getFacebookMonochromeLogo } from './FacebookLogo'

export interface FacebookOptions {
  chains: Chain[];
  options?: BaseSequenceConnectorOptions;
}

export const facebook = ({ chains, options = {} }: FacebookOptions) => ({
  id: 'facebook',
  isSequenceBased: true,
  logoDark: FacebookLogo,
  logoLight: FacebookLogo,
  monochromeLogoDark: getFacebookMonochromeLogo({ isDarkMode: true }),
  monochromeLogoLight: getFacebookMonochromeLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Facebook',
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
            signInWith: 'facebook'
          }
        }
      }
    });
    return connector
  }
})