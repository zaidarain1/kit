import { Chain } from 'wagmi'
import type { ConnectOptions } from '@0xsequence/provider';
import { SequenceConnector } from '@0xsequence/wagmi-connector';
import type { Wallet } from '@0xsequence/kit-core'

import { SequenceLogo } from './SequenceLogo'

export interface SequenceOptions {
  chains: Chain[];
  connect?: ConnectOptions
}

// TODO: fix type issue and remove ts ignore
/* @ts-ignore-next-line */
export const sequence = ({ chains, connect }: SequenceOptions) => ({
  id: 'sequence',
  logoDark: SequenceLogo,
  logoLight: SequenceLogo,
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
}) as Wallet