import { Chain } from 'wagmi'
import { SocialConnector, SocialConnectorOptions } from '../wagmiConnectors';

import { GoogleLogo, getOtcGoogleLogo } from './GoogleLogo'

window.Buffer = window.Buffer || require("buffer").Buffer;

export interface GoogleOptions {
  chains: Chain[];
  options?: SocialConnectorOptions;
}

export const google = ({ chains, options = {} }: GoogleOptions) => ({
  id: 'google',
  logoDark: GoogleLogo,
  logoLight: GoogleLogo,
  otcLogoDark: getOtcGoogleLogo({ isDarkMode: true }),
  otcLogoLight: getOtcGoogleLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Google',
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
            signInOptions: ['google']
          }
        }
      }
    });
    return connector
  }
})