import React, { createContext } from 'react'
import { MethodArguments } from '../api'

export interface CheckoutSettings {
  chainId: number
  abi: string
  methodName: string
  contractAddress: string
  recipientAddress: string
  receiptTitle: string
  methodArguments: MethodArguments
  currency: string
  currencyAmount: string
  collectionContractAddress?: string
  email?: string
  onSuccess?: (transactionHash: string) => void
  onError?: (error: Error) => void
}

type CheckoutModalContext = {
  triggerCheckout?: (settings: CheckoutSettings) => void
  closeCheckout?: () => void
  settings?: CheckoutSettings
  theme?: 'light'|'dark'
}

export const CheckoutModalContext = createContext<CheckoutModalContext>({})