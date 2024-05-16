// import React from 'react'

// import { ModalPosition, Theme } from '../index'

// import { createGenericContext } from './genericContext'

// type ThemeContext = {
//   setTheme: React.Dispatch<React.SetStateAction<Theme>>
//   theme: Theme
//   position: ModalPosition
//   setPosition: React.Dispatch<React.SetStateAction<ModalPosition>>
// }

// export const [useThemeContext, ThemeContextProvider] = createGenericContext<ThemeContext>()


import { proxy } from "valtio";

import { ModalPosition, Theme } from '../index'

export interface ThemeState {
  theme: Theme | undefined
  position: ModalPosition | undefined
}

export const themeState = proxy<ThemeState>({
  theme: undefined,
  position: undefined
})

export const setTheme = (theme: Theme) => {
  themeState.theme = theme
}

export const setPosition = (position: ModalPosition) => {
  themeState.position = position
}
