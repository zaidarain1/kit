import { commons } from '@0xsequence/core'
import { useState, useEffect } from 'react'
import { Deferred } from '../utils/deferred'
import { SequenceWaasProvider } from '@0xsequence/kit-connectors'

let _pendingConfirmation: Deferred<{ id: string; confirmed: boolean }> | undefined

export type WaasRequestConfirmation = {
  id: string
  type: 'signTransaction' | 'signMessage'
  message?: string
  txs?: commons.transaction.Transaction[]
  chainId?: number
}

export function useWaasConfirmationHandler(
  waasConnector?: any
): [WaasRequestConfirmation | undefined, (id: string) => void, (id: string) => void] {
  const [pendingRequestConfirmation, setPendingRequestConfirmation] = useState<WaasRequestConfirmation | undefined>()

  function confirmPendingRequest(id: string) {
    _pendingConfirmation?.resolve({ id, confirmed: true })
    setPendingRequestConfirmation(undefined)
    _pendingConfirmation = undefined
  }

  function rejectPendingRequest(id: string) {
    _pendingConfirmation?.resolve({ id, confirmed: false })
    setPendingRequestConfirmation(undefined)
    _pendingConfirmation = undefined
  }

  useEffect(() => {
    async function setup() {
      if (!waasConnector) {
        return
      }

      const waasProvider = (await waasConnector.getProvider()) as SequenceWaasProvider

      if (!waasProvider) {
        return
      }

      waasProvider.requestConfirmationHandler = {
        // @ts-ignore-next-line
        confirmSignTransactionRequest(
          id: string,
          txs: commons.transaction.Transaction[],
          chainId: number
        ): Promise<{ id: string; confirmed: boolean }> {
          const pending = new Deferred<{ id: string; confirmed: boolean }>()
          setPendingRequestConfirmation({ id, type: 'signTransaction', txs: Array.isArray(txs) ? txs : [txs], chainId })
          _pendingConfirmation = pending
          return pending.promise
        },

        confirmSignMessageRequest(id: string, message: string, chainId: number): Promise<{ id: string; confirmed: boolean }> {
          const pending = new Deferred<{ id: string; confirmed: boolean }>()
          setPendingRequestConfirmation({ id, type: 'signMessage', message, chainId })
          _pendingConfirmation = pending
          return pending.promise
        }
      }
    }
    setup()
  })

  return [pendingRequestConfirmation, confirmPendingRequest, rejectPendingRequest]
}
