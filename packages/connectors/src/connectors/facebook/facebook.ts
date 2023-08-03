import { Chain } from 'wagmi'
import { SocialConnector, SocialConnectorOptions } from '../wagmiConnectors';

import { FacebookLogo, getFacebookOtcLogo } from './FacebookLogo'

window.Buffer = window.Buffer || require("buffer").Buffer;

export interface FacebookOptions {
  chains: Chain[];
  options?: SocialConnectorOptions;
}

export const facebook = ({ chains, options = {} }: FacebookOptions) => ({
  id: 'facebook',
  logoDark: FacebookLogo,
  logoLight: FacebookLogo,
  otcLogoLight: getFacebookOtcLogo({ isDarkMode: false }),
  otcLogoDark: getFacebookOtcLogo({ isDarkMode: true }),
  // iconBackground: '#fff',
  name: 'Facebook',
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
            signInOptions: ['facebook']
          }
        }
      }
    });
    return connector
  }
})