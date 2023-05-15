import React from 'react'
import { Box } from '@0xsequence/design-system'

export interface PendingTransactionProps {
  transactionId: string
}

export const PendingTransaction = ({
  transactionId
}: PendingTransactionProps) => {
  return (
    <Box>
      txId: {transactionId}
    </Box>
  )
}