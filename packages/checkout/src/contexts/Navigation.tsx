import React, { createContext } from 'react'

export interface TransactionFormNavigation {
  location: 'transaction-form',
}

export interface TransactionSuccessParams {
  transactionHash: string
}

export interface TransactionSuccessNavigation {
  location: 'transaction-success',
  params: TransactionSuccessParams
}

export interface TransactionErrorParams {
  error: Error
}

export interface TransactionErrorNavigation {
  location: 'transaction-error',
  params: TransactionErrorParams
}

export interface TransactionPendingParams {
  transactionId: string
}

export interface TransactionPendingNavigation {
  location: 'transaction-pending',
  params: TransactionPendingParams
}

export type Navigation = TransactionFormNavigation | TransactionSuccessNavigation | TransactionErrorNavigation | TransactionPendingNavigation

export type History = Navigation[]

type NavigationContext = {
  setHistory?: (history: History) => void
  history: History,
}

export const NavigationContext = createContext<NavigationContext>({
  history: []
})