import React, { createContext } from 'react'

type WalletModalContext = {
  setOpenWalletModal?: React.Dispatch<React.SetStateAction<boolean>>
}

export const WalletModalContext = createContext<WalletModalContext>({})