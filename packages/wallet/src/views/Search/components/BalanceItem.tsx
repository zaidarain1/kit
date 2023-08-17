import React from 'react'
import { Box } from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'

interface BalanceItemProps {
  tokenBalance: TokenBalance
}

export const BalanceItem = ({
  tokenBalance
}: BalanceItemProps) => {
  return (
    <Box width="full">
      balance item
    </Box>
  )
}