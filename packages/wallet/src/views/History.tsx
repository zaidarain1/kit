import { Box} from '@0xsequence/design-system'
import React, { useSyncExternalStore } from 'react'
import { useNetwork, useAccount } from 'wagmi'

import { useSettings, useTransactionHistorySummary } from '../hooks'
import { TransactionHistoryList } from '../shared/TransactionHistoryList'

export const History = () => {
  const { selectedNetworks } = useSettings() 
  const { address: accountAddress } = useAccount()

  const { data: transactionHistory = [], isLoading: isLoadingTransactionHistory } = useTransactionHistorySummary({
    accountAddress: accountAddress || '',
    chainIds: selectedNetworks
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