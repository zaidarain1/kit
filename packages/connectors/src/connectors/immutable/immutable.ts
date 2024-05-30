import type { Wallet } from '@0xsequence/kit'

import { immutableConnector, BaseSequenceConnectorOptions } from '../wagmiConnectors'

import { ImmutableLogo } from './ImmutableLogo'

export interface ImmutableOptions extends BaseSequenceConnectorOptions {}

export const immutable = (options: ImmutableOptions): Wallet => ({
  id: 'immutable',
  isSequenceBased: false,
  logoDark: ImmutableLogo,
  logoLight: ImmutableLogo,
  name: 'Sequence',
  createConnector: () => {
    const connector = immutableConnector({
      ...options
    })

    return connector
  }
})
