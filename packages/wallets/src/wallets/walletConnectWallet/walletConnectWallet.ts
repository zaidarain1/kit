// TODO: do wallet connect connector integration

import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { WalletConnectWalletLogo } from './WalletConnectWalletLogo'

window.Buffer = window.Buffer || require("buffer").Buffer;

export type WalletConnectWalletOptions = ConstructorParameters<
  typeof WalletConnectConnector
>[0];

export const walletConnectWallet = ({ chains, options }: WalletConnectWalletOptions) => ({
  id: 'wallet-connect',
  logo: WalletConnectWalletLogo,
  // iconBackground: '#fff',
  name: 'Wallet Connect',
  createConnector: () => {
    const connector = new WalletConnectConnector({
      chains,
      options,
    });
    return connector
  }
})