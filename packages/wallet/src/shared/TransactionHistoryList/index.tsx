import React from 'react'
import { Transaction } from '@0xsequence/indexer'

import { Box, Text } from '@0xsequence/design-system'

interface TransactionHistoryListProps {
  transactions: Transaction[]
  isLoading: boolean
  isFetchingNextPage: boolean
  hasNextPage: undefined | boolean
}

export const TransactionHistoryList = ({
  transactions,
  isLoading,
  isFetchingNextPage,
  hasNextPage
}: TransactionHistoryListProps) => {

  interface TransactionsByTime {
    yesterday: Transaction[]
    week: Transaction[]
    month: Transaction[]
    year: Transaction[]
  }

  const transactionsByTime: TransactionsByTime = {
    yesterday: [],
    week: [],
    month: [],
    year: []
  }

  return (
    <Box>
      {transactions.map((transaction) => {
        return (
          <Box key={transaction.txnHash}>
            <Text>{transaction.txnHash}</Text>
          </Box>
        )
      })}
    </Box>
  )
}