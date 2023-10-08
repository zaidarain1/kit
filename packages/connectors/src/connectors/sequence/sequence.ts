import { Chain } from 'wagmi'
import { SequenceConnector, Options } from '@0xsequence/wagmi-connector';
import type { Wallet } from '@0xsequence/kit'

import { SequenceLogo } from './SequenceLogo'

export interface SequenceOptions {
  chains: Chain[];
  options?: Options
}

export const sequence = ({ chains, options }: SequenceOptions) => ({
  id: 'sequence',
  isSequenceBased: true,
  logoDark: SequenceLogo,
  logoLight: SequenceLogo,
  // iconBackground: '#777',
  name: 'Sequence',
  createConnector: () => {
    const connector = new SequenceConnector({
      chains,
      options: options,
    });
    return connector
  }
}) as Wallet