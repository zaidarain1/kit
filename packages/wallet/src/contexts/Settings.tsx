import React, { createContext } from 'react'

export type FiatCurrency = 'USD' | 'CAD' | 'EUR'

type SettingsContext = {
  hideUnlistedTokens: boolean,
  hideCollectibles: boolean,
  fiatCurrency: FiatCurrency
  setHideUnlistedTokens?: React.Dispatch<React.SetStateAction<boolean>>,
  setHideCollectibles?: React.Dispatch<React.SetStateAction<boolean>>,
  setFiatCurrency?: React.Dispatch<React.SetStateAction<FiatCurrency>>,
}

export const SettingsContext = createContext<SettingsContext>({
  hideUnlistedTokens: true,
  hideCollectibles: false,
  fiatCurrency: 'USD'
})