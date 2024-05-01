import { SequenceWaaS } from '@0xsequence/waas'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'


export function useWaasRevalidation(
) {
  const { connector } = useAccount()

  const waasConnector = connector?.type === 'sequence-waas' ? connector : undefined


  useEffect(() => {
    async function setup() {
      if (!waasConnector) {
        return
      }

      // @ts-ignore-next-line
      const sequenceWaas: SequenceWaaS = waasConnector.sequenceWaas

      if (!sequenceWaas) {
        return
      }

      sequenceWaas.onValidationRequired(() => {
        console.log('TODO: requires validation!')
      })
    }
    setup()
  }, [waasConnector])

  return 
}
