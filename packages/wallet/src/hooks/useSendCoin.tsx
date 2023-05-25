import { useContext } from 'react'
import { SendCoinContext } from '../contexts/SendCoin'

export const useSendCoin = () => {
  const {
    amount,
    toAddress,
    setAmount,
    setToAddress,
    selectedToken,
    setSelectedToken
  } = useContext(SendCoinContext)

  const resetAll = () => {
    setAmount && setAmount('')
    setToAddress && setToAddress('')
    setSelectedToken && setSelectedToken(undefined)
  }

  return {
    amount,
    toAddress,
    selectedToken,
    setAmount: setAmount || (() => {}),
    setToAddress: setToAddress || (() => {}),
    setSelectedToken: setSelectedToken || (() => {}),
    resetAll,
  }
}