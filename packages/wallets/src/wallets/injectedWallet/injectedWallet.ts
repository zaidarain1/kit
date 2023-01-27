import { Chain } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'

import { InjectedWalletLogo } from './InjectedWalletLogo'

export interface InjectedWalletOptions {
  chains: Chain[];
  shimDisconnect?: boolean;
}

export const injectedWallet = ({ chains, shimDisconnect }: InjectedWalletOptions) => ({
  id: 'injected-wallet',
  logo: InjectedWalletLogo,
  // iconBackground: '#fff',
  name: 'Injected Wallet',
  createConnector: () => {
    const connector = new InjectedConnector({
      chains,
      options: { shimDisconnect }
    });
    return connector
  }
})