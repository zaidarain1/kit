import React from 'react'
import { useThemeContext } from '../contexts/Theme'

export const useKitTheme = () => {
  const { setTheme, theme, position, setPosition } = useThemeContext()

  return {
    setTheme,
    theme,
    position,
    setPosition
  }
}

export { useTheme } from '@0xsequence/design-system'