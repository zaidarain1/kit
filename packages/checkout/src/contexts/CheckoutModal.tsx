import React, { createContext } from 'react'

type CheckoutModalContext = {
  setOpenCheckoutModal?: React.Dispatch<React.SetStateAction<boolean>>
  theme?: 'light'|'dark'
}

export const CheckoutModalContext = createContext<CheckoutModalContext>({})