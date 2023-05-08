import React, { createContext } from 'react'

export interface AllCollectiblesParams {
  collectionAddress: string
}

export interface Navigation {
  location: 'home' | 'all-coins' | 'all-collections' | 'all-collectibles',
  params?: AllCollectiblesParams
}

type NavigationContext = {
  setNavigation?: React.Dispatch<React.SetStateAction<Navigation>>,
  navigation?: Navigation,
}

export const NavigationContext = createContext<NavigationContext>({})