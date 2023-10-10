import { Chain } from 'wagmi'
import { BaseSequenceConnector, BaseSequenceConnectorOptions } from '../wagmiConnectors';
import type { Wallet } from '@0xsequence/kit'

import { SequenceLogo } from './SequenceLogo'

export interface SequenceOptions {
  chains: Chain[];
  options?: BaseSequenceConnectorOptions
}


export const sequence = ({ chains, options }: SequenceOptions) => ({
  id: 'sequence',
  isSequenceBased: true,
  logoDark: SequenceLogo,
  logoLight: SequenceLogo,
  // iconBackground: '#777',
  name: 'Sequence',
  createConnector: () => {
    const connector = new BaseSequenceConnector({
      chains,
      options,
    });
    return connector
  }
}) as Wallet