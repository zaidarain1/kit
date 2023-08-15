import { Box, Text } from '@0xsequence/design-system'
import React from 'react'

import { useNetwork, useAccount } from 'wagmi'

import { InfiniteScroll } from '../shared/InfiniteScroll'
import { TransactionHistoryList } from '../shared/TransactionHistoryList'
import { flattenPaginatedTransactionHistory } from '../utils'
import { useTransactionHistory } from '../hooks'
import { HEADER_HEIGHT } from '../constants'

export const History = () => {
  const { chain } = useNetwork() 
  const { address: accountAddress } = useAccount()

  const {
    data: dataTransactionHistory,
    isLoading: isLoadingTransactionHistory,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useTransactionHistory({
    chainId: chain?.id || 137,
    accountAddress: accountAddress || '',
  })

  const transactionHistory = flattenPaginatedTransactionHistory(dataTransactionHistory)

  return (
    <Box>
      <Box padding="5" paddingTop="3">
        <InfiniteScroll
          onLoad={() => fetchNextPage()}
          hasMore={hasNextPage}
        >
          <TransactionHistoryList
            transactions={transactionHistory}
            isLoading={isLoadingTransactionHistory}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
          />
        </InfiniteScroll>
      </Box>
    </Box>
  )
}