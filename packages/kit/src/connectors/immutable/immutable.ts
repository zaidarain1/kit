import { Wallet } from '../../types'
import { immutableConnector } from '../wagmiConnectors'
import { ImmutableLogo } from './ImmutableLogo'
import { BaseImmutableConnectorOptions } from '../wagmiConnectors'

export interface ImmutableOptions extends BaseImmutableConnectorOptions {}

export const immutable = (options: ImmutableOptions): Wallet => ({
  id: 'immutable',
  isSequenceBased: false,
  logoDark: ImmutableLogo,
  logoLight: ImmutableLogo,
  name: 'Immutable',
  createConnector: () => {
    const connector = immutableConnector({
      ...options
    })

    return connector
  }
})
