import { SequenceMetadata } from '@0xsequence/metadata'
import { useMemo } from 'react'

import { useProjectAccessKey } from './useProjectAccessKey'

import { DEVMODE } from '../env'

export const useMetadataClient = () => {
  const projectAccessKey = useProjectAccessKey()

  const metadataClient = useMemo(() => {
    const clientUrl = DEVMODE ? 'https://dev-metadata.sequence.app' : 'https://metadata.sequence.app'

    return new SequenceMetadata(clientUrl, projectAccessKey)
  }, [projectAccessKey])

  return metadataClient
}
