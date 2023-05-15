import React, { createContext } from 'react'

export interface TransactionPendingParams {
  transactionId: string
}

export interface TransactionSuccessParams {
  transactionHash: string
}

export interface TransactionErrorParams {
  error: Error
}

export interface TransactionFormNavigation {
  location: 'transaction-form',
}

export interface TransactionSuccessNavigation {
  location: 'transaction-success',
  params: TransactionSuccessParams
}

export interface TransactionErrorNavigation {
  location: 'transaction-error',
  params: TransactionErrorParams
}

export interface TransactionPendingNavigation {
  location: 'transaction-pending',
  params: TransactionPendingParams
}

export type Navigation = TransactionFormNavigation | TransactionSuccessNavigation | TransactionErrorNavigation | TransactionPendingNavigation

type NavigationContext = {
  setNavigation?: (navigation:Navigation) => void,
  navigation?: Navigation,
}

export const NavigationContext = createContext<NavigationContext>({})