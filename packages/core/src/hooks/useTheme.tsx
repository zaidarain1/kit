import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/Theme'

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext)

  return {
    setTheme,
    theme
  }
}