import React, { createContext } from 'react'
import { Transaction } from '@0xsequence/indexer'

export interface AllCollectiblesParams {
  collectionAddress: string
}

export interface AllCollectiblesNavigation {
  location: 'all-collectibles',
  params: AllCollectiblesParams
}

export interface CoinDetailsParams {
  contractAddress: string
  chainId: number
}

export interface CoinDetailsNavigation {
  location: 'coin-details',
  params: CoinDetailsParams
}

export interface CollectibleDetailsParams {
  contractAddress: string
  chainId: number
  tokenId: string
}

export interface CollectibleDetailsNavigation {
  location: 'collectible-details',
  params: CollectibleDetailsParams
}

export interface TransactionDetailsParams {
  transaction: Transaction
}

export interface TransactionDetailsNavigation {
  location: 'transaction-details',
  params: TransactionDetailsParams
}

export interface SearchViewAllParams {
  defaultTab: 'coins' | 'collectibles'
}

export interface SearchViewAllNavigation {
  location: 'search-view-all',
  params: SearchViewAllParams
}

export interface BasicNavigation {
  location:
    'home' |
    'all-coins' |
    'all-collections' |
    'send' |
    'receive' |
    'history' |
    'receive' |
    'settings' |
    'settings-general' |
    'settings-currency' |
    'settings-networks' |
    'search'
}

export type Navigation =
  BasicNavigation |
  AllCollectiblesNavigation |
  CoinDetailsNavigation |
  CollectibleDetailsNavigation |
  TransactionDetailsNavigation |
  SearchViewAllNavigation

export type History = Navigation[]

type NavigationContext = {
  setHistory?: (history: History) => void
  history: History,
}

export const NavigationContext = createContext<NavigationContext>({
  history: []
})