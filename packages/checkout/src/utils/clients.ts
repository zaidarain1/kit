import { SequenceAPIClient } from '@0xsequence/api'
import { SequenceIndexerClient } from '@0xsequence/indexer'
import { SequenceMetadataClient } from '@0xsequence/metadata'
import { ChainId, networks, indexerURL } from '@0xsequence/network'

export const getNetworkConfigAndClients = (chainID: number | string) => {
  const network = networks[chainID as ChainId]
  
  if (!network) {
    throw 'invalid network'
  }

  const metadataClient = new SequenceMetadataClient('https://metadata.sequence.app')
  const indexerClient = new SequenceIndexerClient(indexerURL(network.name))
  const apiClient = new SequenceAPIClient('https://dev-api.sequence.app')

  return { network, metadataClient, indexerClient, apiClient }
}
