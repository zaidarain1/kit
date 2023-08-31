import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { WalletConnectLogo } from './WalletConnectLogo'

window.Buffer = window.Buffer || require("buffer").Buffer;

export type WalletConnectWalletOptions = ConstructorParameters<
  typeof WalletConnectConnector
>[0];

export const walletConnect = ({ chains, options }: WalletConnectWalletOptions) => ({
  id: 'wallet-connect',
  logoDark: WalletConnectLogo,
  logoLight: WalletConnectLogo,
  // iconBackground: '#fff',
  name: 'Walletconnect',
  createConnector: () => {
    const connector = new WalletConnectConnector({
      chains,
      options,
    });
    return connector
  }
})