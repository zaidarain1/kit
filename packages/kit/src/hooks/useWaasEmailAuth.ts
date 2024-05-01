import { useState } from 'react'
import { ExtendedConnector } from '../utils'
import { SequenceWaasProvider } from '@0xsequence/kit-connectors'

export function useEmailAuth({ connector, onSuccess }: { connector?: ExtendedConnector; onSuccess: (idToken: string) => void }) {
  if (!connector) {
    return {
      inProgress: false,
      loading: false,
      error: undefined,
      initiateAuth: async (email: string) => {},
      sendChallengeAnswer: async (answer: string) => {}
    }
  }

  const [email, setEmail] = useState('')
  const [error, setError] = useState<unknown>()
  const [loading, setLoading] = useState(false)
  const [instance, setInstance] = useState('')

  const initiateAuth = async (email: string) => {
    setLoading(true)

    try {
      const connectorAny: any = connector
      const provider = (await connectorAny.getProvider()) as SequenceWaasProvider
      const { instance } = await provider.sequenceWaas?.email.initiateAuth({ email })
      setInstance(instance)
      setEmail(email)
    } catch (e: any) {
      setError(e.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const sendChallengeAnswer = async (answer: string) => {
    setLoading(true)

    try {
      const connectorAny: any = connector
      const provider = (await connectorAny.getProvider()) as SequenceWaasProvider
      const sessionHash = await provider.sequenceWaas?.getSessionHash()
      const { idToken } = await provider.sequenceWaas?.email.finalizeAuth({ instance, answer, email, sessionHash })
      onSuccess(idToken)
    } catch (e: any) {
      setError(e.message || 'Unknown error')
      setLoading(false)
    }
  }

  return {
    inProgress: loading || !!instance,
    loading,
    error,
    initiateAuth,
    sendChallengeAnswer: instance ? sendChallengeAnswer : undefined
  }
}
