import { SequenceAPIClient } from '@0xsequence/api'
import { useMemo } from 'react'

import { useProjectAccessKey } from './useProjectAccessKey'

import { DEVMODE } from '../env'

export const useAPIClient = () => {
  const projectAccessKey = useProjectAccessKey()

  const clientUrl = DEVMODE ? 'https://dev-api.sequence.app' : 'https://api.sequence.app'

  const apiClient = useMemo(() => {
    return new SequenceAPIClient(clientUrl, projectAccessKey)
  }, [projectAccessKey])

  return apiClient
}
