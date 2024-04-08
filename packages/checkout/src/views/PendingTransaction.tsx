import React, { useEffect } from 'react'
import { Box, Spinner, Text } from '@0xsequence/design-system'

import { useNavigation, useCheckoutModal } from '../hooks'
import { TransactionPendingNavigation } from '../contexts'
import { fetchSardineOrderStatus } from '../api'

const POLLING_TIME = 10 * 1000

export const PendingTransaction = () => {
  const nav = useNavigation()
  const {
    params: { orderId }
  } = nav.navigation as TransactionPendingNavigation
  const { setNavigation } = nav

  console.log('orderId:', orderId)

  // const paperGetStatusUrl = `https://withpaper.com/api/v1/transaction-status/${transactionId}`

  const pollForOrderStatus = async () => {
    try {
      console.log('Polling for transaction status')
      const authToken = '' //TODO: remove and add as param
      const pollResponse = await fetchSardineOrderStatus(authToken, orderId)
      const status = pollResponse.status
      // const transactionHash = pollResponse.result.transactionHash

      console.log('transaction status poll response:', status)

      if (status === 'Draft') {
        return
      }
      if (status === 'Complete') {
        setNavigation &&
          setNavigation({
            location: 'transaction-success',
            params: {
              transactionHash: '0x0000000000000000000000000000000000000000000000000000000000000000' // TODO: replace
            }
          })
        return
      }
      if (status === 'TRANSFER_FAILED' || status === 'PAYMENT_FAILED') {
        setNavigation &&
          setNavigation({
            location: 'transaction-error',
            params: {
              error: new Error('Failed to transfer collectible')
            }
          })
        return
      }
    } catch (e) {
      console.error('An error occurred while fetching the transaction status')
      setNavigation &&
        setNavigation({
          location: 'transaction-error',
          params: {
            error: e
          }
        })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      pollForOrderStatus()
    }, POLLING_TIME)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Box style={{ height: '500px' }}>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="full"
        height="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="lg" style={{ width: '60px', height: '60px' }} />
        <Text variant="medium" color="text50" textAlign="center" marginTop="8">
          Order in progress. <br />
          This may take a few minutes. <br />
          Please do not close this window.
        </Text>
      </Box>
    </Box>
  )
}
