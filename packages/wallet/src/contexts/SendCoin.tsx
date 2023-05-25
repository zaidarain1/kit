import React, { createContext } from 'react'
import { TokenBalance } from '@0xsequence/indexer'

type SendCoinContext = {
  amount: string,
  setAmount?: React.Dispatch<React.SetStateAction<string>>,
  toAddress: string,
  setToAddress?: React.Dispatch<React.SetStateAction<string>>,
  selectedToken?: TokenBalance,
  setSelectedToken?: React.Dispatch<React.SetStateAction<TokenBalance | undefined>>,
}

export const SendCoinContext = createContext<SendCoinContext>({
  amount: '',
  toAddress: ''
})