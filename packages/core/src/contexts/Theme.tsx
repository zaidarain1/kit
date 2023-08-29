import React from 'react'
import { Theme } from '../index'
import { createGenericContext } from '../utils'

type ThemeContext = {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
  theme: Theme
}

export const [useThemeContext, ThemeContextProvider] = createGenericContext<ThemeContext>()