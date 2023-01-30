import React from 'react'
import { ethers } from 'ethers'
import { Chain } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'

import { InjectedWalletLogo } from './InjectedWalletLogo'
import { MetamaskWalletLogo } from '../metamaskWallet/MetamaskWalletLogo'
import { SequenceWalletLogo } from '../sequenceWallet/SequenceWalletLogo'

export interface Window {
  ethereum?: ethers.providers.ExternalProvider;
}

export interface MoreExternalProviders {
  isSequence?: boolean
}

export interface InjectedWalletOptions {
  chains: Chain[];
  shimDisconnect?: boolean;
}

export interface InjectedWalletInformation {
  hideConnectorId: string | null;
  name: string;
  logo: React.FunctionComponent
}

const getInjectedWalletInformation = (): InjectedWalletInformation => {
  if (window?.ethereum?.isMetaMask) {
    return {
      name: 'Metamask',
      logo: MetamaskWalletLogo,
      hideConnectorId: 'metamask'
    }
  /* @ts-ignore-next-line */
  } else if (window?.ethereum?.isSequence) {
    return {
      name: 'Sequence',
      logo: SequenceWalletLogo,
      hideConnectorId: 'sequence'
    }
  } else {
    return {
      name: 'Injected Wallet',
      logo: InjectedWalletLogo,
      hideConnectorId: null
    }
  }
}

export const injectedWallet = ({ chains, shimDisconnect }: InjectedWalletOptions) => {
  const { name, hideConnectorId, logo } = getInjectedWalletInformation()

  return ({
    id: 'injected-wallet',
    hideConnectorId,
    logo,
    // iconBackground: '#fff',
    name,
    createConnector: () => {
      const connector = new InjectedConnector({
        chains,
        options: { shimDisconnect }
      });
      return connector
    }
  })
}