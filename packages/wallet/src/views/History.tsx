import { Box} from '@0xsequence/design-system'
import { Transaction } from '@0xsequence/indexer'
import React from 'react'

import { useTransactionHistorySummary } from '../hooks'
import { useNetwork, useAccount } from 'wagmi'

import { TransactionHistoryList } from '../shared/TransactionHistoryList'

export const History = () => {
  console.log('in history...')

  const { chains } = useNetwork() 
  const { address: accountAddress } = useAccount()

  const { data: transactionHistory = [], isLoading: isLoadingTransactionHistory } = useTransactionHistorySummary({
    accountAddress: accountAddress || '',
    chainIds: chains.map(chain => chain.id)
  })

  return (
    <Box>
      <Box padding="5" paddingTop="3">
          <TransactionHistoryList
            transactions={transactionHistory}
            isLoading={isLoadingTransactionHistory}
            isFetchingNextPage={false}
          />
      </Box>
    </Box>
  )
}