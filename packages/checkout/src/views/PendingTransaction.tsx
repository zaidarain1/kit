import React from 'react'
import { Box } from '@0xsequence/design-system'

import { useNavigation, useCheckoutModal } from '../hooks'
import { TransactionPendingNavigation } from '../contexts'

export const PendingTransaction = () => {
  const nav = useNavigation()
  const { params: { transactionId } } = nav.navigation as TransactionPendingNavigation
  const { setNavigation } = nav

  const paperGetStatusUrl = `https://withpaper.com/api/v1/transaction-status/${transactionId}`

  const pollForTxStatus = async () => {
    try {
      console.log('Polling for transaction status')
      const pollResponse = await fetch(paperGetStatusUrl, {
        method: 'GET',
        headers: {
          accept: 'application/json'
        }
      }).then(res => res.json())
      const status = pollResponse.result.status
      const transactionHash = pollResponse.result.transactionHash

      console.log('transaction status poll response:', status)

      if (status === 'PENDING') {
        return
      }
      if (status === 'TRANSFER_SUCCEEDED') {
        setNavigation && setNavigation({
          location: 'transaction-success',
          params: {
            transactionHash,
          }
        })
        return
      }
      if (status === 'TRANSFER_FAILED' || status === 'PAYMENT_FAILED') {
        setNavigation && setNavigation({
          location: 'transaction-error',
          params: {
            error: new Error('Failed to transfer collectible'),
          }
        })
        return
      }
    } catch (e) {
      console.error('An error occurred while fetching the transaction status')
      setNavigation && setNavigation({
        location: 'transaction-error',
        params: {
          error: e,
        }
      })
    }
  }

  return (
    <Box>
      txId: {transactionId}
    </Box>
  )
}