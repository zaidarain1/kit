import { SequenceAPIClient } from '@0xsequence/api'
import { SequenceIndexer } from '@0xsequence/indexer'
import { SequenceMetadataClient } from '@0xsequence/metadata'
import { ChainId, networks, indexerURL } from '@0xsequence/network'

import { LocalStorageKey } from '../constants'

export const getNetworkConfigAndClients = (chainID: number | string) => {
  const network = networks[chainID as ChainId]
  
  if (!network) {
    throw 'invalid network'
  }

  const projectAccessKey = localStorage.getItem(LocalStorageKey.ProjectAccessKey) || undefined

  const metadataClient = new SequenceMetadataClient('https://metadata.sequence.app', projectAccessKey)
  const indexerClient = new SequenceIndexer(indexerURL(network.name), projectAccessKey)
  const apiClient = new SequenceAPIClient('https://api.sequence.app', projectAccessKey)

  return { network, metadataClient, indexerClient, apiClient }
}
