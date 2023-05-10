import React, { createContext } from 'react'

type WalletModalContext = {
  setOpenWalletModal?: React.Dispatch<React.SetStateAction<boolean>>
  theme?: 'light'|'dark'
}

export const WalletModalContext = createContext<WalletModalContext>({})