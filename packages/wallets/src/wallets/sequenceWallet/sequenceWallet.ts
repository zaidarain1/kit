import { Chain } from 'wagmi'
import type { ConnectOptions } from '@0xsequence/provider';
import { SequenceConnector } from '@0xsequence/wagmi-connector';

import { SequenceWalletLogo } from './SequenceWalletLogo'

export interface SequenceWalletOptions {
  chains: Chain[];
  connect?: ConnectOptions
}

export const sequenceWallet = ({ chains, connect }: SequenceWalletOptions) => ({
  id: 'sequence',
  logo: SequenceWalletLogo,
  // iconBackground: '#777',
  name: 'Sequence',
  createConnector: () => {
    const connector = new SequenceConnector({
      chains,
      options: {
        connect
      },
    });
    return connector
  }
})