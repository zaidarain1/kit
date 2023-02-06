import React, { createContext } from 'react'

type ModalThemeContextType = {
  setIsDarkMode?: React.Dispatch<React.SetStateAction<boolean>>
  isDarkMode?: boolean
}

export const ModalThemeContext = createContext<ModalThemeContextType>({})