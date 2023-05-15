import React, { useEffect } from 'react'
import { Box, CloseIcon, Text } from '@0xsequence/design-system'

import { useCheckoutModal } from '../hooks'

export const TransactionError = () => {
  const { closeCheckout, settings } = useCheckoutModal()

  useEffect(() => {
    setTimeout(() => {
      closeCheckout && closeCheckout()
      settings?.onError && settings.onError()
    }, 3000)
  }, [])

  return (
    <Box>
      <Box
        flexDirection="column"
        alignItems="center"
        position="absolute"
        style={{top: '50%', right: '50%', transform: 'translate(50%, -50%)'}}
      >
        <NotificationErrorIcon />
        <Text fontSize="xlarge">Error</Text>
        <Text variant="normal" color="text80">
          An error occurred while processing the transaction.
        </Text>
      </Box>
    </Box>
 )
}

export const NotificationErrorIcon = () => (
  <Box
    color="white"
    alignItems="center"
    justifyContent="center"
    width="16"
    height="16"
    borderRadius="circle"
    marginBottom="2"
    background="negative"
  >
    <CloseIcon />
  </Box>
)
