import React, { useContext } from 'react'
import { useThemeContext } from '../contexts/Theme'

export const useTheme = () => {
  const { setTheme, theme } = useThemeContext()

  return {
    setTheme,
    theme
  }
}