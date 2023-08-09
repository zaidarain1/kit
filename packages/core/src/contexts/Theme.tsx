import React, { createContext } from 'react'
import { Theme } from '../index'

type ThemeContext = {
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>
  theme: Theme
}

export const ThemeContext = createContext<ThemeContext>({
  theme: 'dark'
})