import { useContext } from 'react'
import { SettingsContext } from '../contexts/Settings'

export const useSettings = () => {
  const {
    hideUnlistedTokens,
    setHideUnlistedTokens,
    hideCollectibles,
    setHideCollectibles,
    fiatCurrency,
    setFiatCurrency,
  } = useContext(SettingsContext)


  return {
    hideUnlistedTokens,
    setHideUnlistedTokens,
    hideCollectibles,
    setHideCollectibles,
    fiatCurrency,
    setFiatCurrency,
  }
}