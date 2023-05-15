import React, { createContext } from 'react'

export interface TransactionPendingParams {
  transactionId: string
}

export interface Navigation {
  location: 'transaction-form' | 'transaction-pending' | 'transaction-success' | 'transaction-error',
  params?: TransactionPendingParams
}

type NavigationContext = {
  setNavigation?: (navigation:Navigation) => void,
  navigation?: Navigation,
}

export const NavigationContext = createContext<NavigationContext>({})