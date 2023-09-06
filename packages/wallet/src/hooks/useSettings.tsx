import { LocalStorageKey } from '@0xsequence/kit'
import { useState } from 'react'
import { FiatCurrency, defaultFiatCurrency } from '../constants'

interface Settings {
  hideCollectibles: boolean
  hideUnlistedTokens: boolean
  fiatCurrency: FiatCurrency
  setFiatCurrency: (newFiatCurrency: FiatCurrency) => void,
  setHideCollectibles: (newState: boolean) => void,
  setHideUnlistedTokens: (newState: boolean) => void,
}

type SettingsItems = Pick<Settings, 'hideCollectibles' | 'hideUnlistedTokens' | 'fiatCurrency'> 

export const useSettings = ():Settings => {
  const getSettingsFromStorage = ():SettingsItems => {
    let hideUnlistedTokens = true
    let hideCollectibles = false
    let fiatCurrency = defaultFiatCurrency

    try {
      const settingsStorage = localStorage.getItem(LocalStorageKey.Settings)
  
      const settings = JSON.parse(settingsStorage || '{}')
      if (settings?.hideUnlistedTokens !== undefined) {
        hideUnlistedTokens = settings?.hideUnlistedTokens
      }
      if (settings?.hideCollectibles !== undefined) {
        hideCollectibles = settings?.hideCollectibles
      }
      if (settings?.fiatCurrency !== undefined) {
        fiatCurrency = settings?.fiatCurrency as FiatCurrency
      }
  
    } catch(e) {
      console.error(e, 'Failed to fetch settings')
    }

    return {
      hideUnlistedTokens,
      hideCollectibles,
      fiatCurrency,
    }
  }
  const defaultSettings = getSettingsFromStorage()

  const [settings, setSettings] = useState(defaultSettings)
  
  const setHideUnlistedTokens = (newState: boolean) => {
    const oldSettings = getSettingsFromStorage()
    const newSettings = {
      ...oldSettings,
      hideUnlistedTokens: newState,
    }
    localStorage.setItem(LocalStorageKey.Settings, JSON.stringify(newSettings))
    setSettings(newSettings)
  }

  const setHideCollectibles = (newState: boolean) => {
    const oldSettings = getSettingsFromStorage()
    const newSettings = {
      ...oldSettings,
      hideCollectibles: newState,
    }
    localStorage.setItem(LocalStorageKey.Settings, JSON.stringify(newSettings))
    setSettings(newSettings)
  }

  const setFiatCurrency = (newFiatCurrency: FiatCurrency) => {
    const oldSettings = getSettingsFromStorage()
    const newSettings = {
      ...oldSettings,
      fiatCurrency: newFiatCurrency,
    }
    localStorage.setItem(LocalStorageKey.Settings, JSON.stringify(newSettings))
    setSettings(newSettings)
  }

  return {
    ...settings,
    setFiatCurrency,
    setHideCollectibles,
    setHideUnlistedTokens,
  }
}
