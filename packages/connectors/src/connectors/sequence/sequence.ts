import { sequenceWallet, BaseSequenceConnectorOptions } from '../wagmiConnectors';
import type { Wallet } from '@0xsequence/kit'

import { SequenceLogo } from './SequenceLogo'

export interface SequenceOptions extends BaseSequenceConnectorOptions {
}

export const sequence = (options: SequenceOptions) => ({
  id: 'sequence',
  isSequenceBased: true,
  logoDark: SequenceLogo,
  logoLight: SequenceLogo,
  // iconBackground: '#777',
  name: 'Sequence',
  createConnector: () => {
    const connector = sequenceWallet({
      ...options,
    });
    return connector
  }
}) as Wallet