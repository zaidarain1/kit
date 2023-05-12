import React, { createContext } from 'react'

export interface CheckoutSettings {
  abi: string
  methodName: string
  contractAddress: string
  collectionAddress?: string
  email?: string
  onSuccess?: () => void
  onError?: () => void
}

type CheckoutModalContext = {
  triggerCheckout?: (settings: CheckoutSettings) => void
  closeCheckout?: () => void
  settings?: CheckoutSettings
  theme?: 'light'|'dark'
}

export const CheckoutModalContext = createContext<CheckoutModalContext>({})