import { mock as mockBase, MockParameters } from 'wagmi/connectors'
import type { Wallet } from '@0xsequence/kit'

import { SequenceLogo } from '../sequence/SequenceLogo'

export const mock = (options: MockParameters) => ({
  id: 'mock',
  isSequenceBased: true,
  logoDark: SequenceLogo,
  logoLight: SequenceLogo,
  // iconBackground: '#777',
  name: 'Mock',
  createConnector: () => {
    const connector = mockBase(options);
    return connector
  }
}) as Wallet