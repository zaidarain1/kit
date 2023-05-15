import React, { useState } from 'react'
import {
  Box,
  Text,
} from '@0xsequence/design-system'
import { useCheckoutModal } from '../hooks/useCheckoutModal'
import { PaperTransaction } from '../components/PaperTransaction'

export const PaperTransactionForm = () => {
  const { settings } = useCheckoutModal()

  return (
    <Box padding="4"gap="4" flexDirection="column">
      <Box>
        <Text as="h1" variant="normal" fontWeight="bold" color="text100" textAlign="center" marginTop="10" marginBottom="6">
          Pay with credit or debit card
        </Text>
      </Box>
      {settings && (
        <Box>
          <PaperTransaction settings={settings}  />
        </Box>
      )}
    </Box>
  )
}