import React, { createContext } from 'react'

export interface AllCollectiblesParams {
  collectionAddress: string
}

export interface AllCollectiblesNavigation {
  location: 'all-collectibles',
  params: AllCollectiblesParams
}

export interface BasicNavigation {
  location: 'home' | 'all-coins' | 'all-collections' | 'send' | 'history' | 'swap',
}

export type Navigation = BasicNavigation | AllCollectiblesNavigation

type NavigationContext = {
  setNavigation?: (navigation:Navigation) => void,
  navigation?: Navigation,
}

export const NavigationContext = createContext<NavigationContext>({})