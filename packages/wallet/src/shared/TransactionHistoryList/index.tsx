import React from 'react'
import { Transaction } from '@0xsequence/indexer'

import { TransactionHistoryItem } from './TransactionHistoryItem'
import { Box } from '@0xsequence/design-system'

import { TransactionHistorySkeleton } from './TransactionHistorySkeleton'

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
  
  if (isLoading) {
    return (
      <Box
        flexDirection="column"
        gap="2"
      >
        <TransactionHistorySkeleton />
      </Box>
    )
  }

  return (
    <Box
      flexDirection="column"
      gap="2"
    >
      {transactions.map((transaction) => {
        return (
          <Box key={transaction.txnHash}>
            <TransactionHistoryItem transaction={transaction} />
          </Box>
        )
      })}
    </Box>
  )
}