import React from 'react'
import { ethers } from 'ethers'
import { Chain } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'

import { InjectedLogo } from './InjectedLogo'
import { MetamaskLogo } from '../metamask/MetamaskLogo'
import { SequenceLogo } from '../sequence/SequenceLogo'

declare global {
  interface Window {
    ethereum?: ethers.providers.ExternalProvider;
  }
}

window.ethereum = window.ethereum || {}

export interface MoreExternalProviders {
  isSequence?: boolean
}

export interface InjectedOptions {
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
      logo: MetamaskLogo,
      hideConnectorId: 'metamask'
    }
  /* @ts-ignore-next-line */
  } else if (window?.ethereum?.isSequence) {
    return {
      name: 'Sequence',
      logo: SequenceLogo,
      hideConnectorId: null
    }
  } else {
    return {
      name: 'Injected Wallet',
      logo: InjectedLogo,
      hideConnectorId: null
    }
  }
}

export const injected = ({ chains, shimDisconnect }: InjectedOptions) => {
  const { name, hideConnectorId, logo } = getInjectedWalletInformation()

  return ({
    id: 'injected',
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