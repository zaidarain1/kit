import React, { useEffect } from 'react'
import { Box, Spinner, Text } from '@0xsequence/design-system'

import { useNavigation, useCheckoutModal } from '../hooks'
import { TransactionPendingNavigation } from '../contexts'
import { fetchSardineOrderStatus } from '../api'

const POLLING_TIME = 10 * 1000

export const PendingTransaction = () => {
  const nav = useNavigation()
  const { settings } = useCheckoutModal()
  const {
    params: { authToken, orderId }
  } = nav.navigation as TransactionPendingNavigation
  const { setNavigation } = nav

  console.log('orderId:', orderId)

  const isDev = settings?.sardineCheckout?.isDev || false
  const url = isDev
    ? `https://crypto.sandbox.sardine.ai/?client_token=${authToken}&show_features=true`
    : `https://crypto.sardine.ai/?client_token=${authToken}&show_features=true`

  const pollForOrderStatus = async () => {
    try {
      console.log('Polling for transaction status')
      const isDev = settings?.sardineCheckout?.isDev || false

      const pollResponse = await fetchSardineOrderStatus(orderId, isDev)
      const status = pollResponse.resp.status
      const transactionHash = pollResponse.resp?.data?.transactionHash
      const network = pollResponse.resp?.data?.network

      console.log('transaction status poll response:', status)

      if (status === 'Draft') {
        return
      }
      if (status === 'Complete') {
        setNavigation &&
          setNavigation({
            location: 'transaction-success',
            params: {
              transactionHash,
              network
            }
          })
        return
      }
      if (status === 'Declined') {
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

  // return (
  //   <Box style={{ height: '500px' }}>
  //     <Box
  //       position="absolute"
  //       top="0"
  //       left="0"
  //       width="full"
  //       height="full"
  //       flexDirection="column"
  //       alignItems="center"
  //       justifyContent="center"
  //     >
  //       <Spinner size="lg" style={{ width: '60px', height: '60px' }} />
  //       <Text variant="medium" color="text50" textAlign="center" marginTop="8">
  //         Order in progress. <br />
  //         This may take a few minutes. <br />
  //         Please do not close this window.
  //       </Text>
  //     </Box>
  //   </Box>
  // )
  return (
    <Box alignItems="center" justifyContent="center" style={{ height: '620px' }}>
      <iframe
        src={url}
        style={{
          maxHeight: '500px',
          height: '100%',
          maxWidth: '380px',
          width: '100%'
        }}
      />
    </Box>
  )
}
