import { useContext } from 'react'
import { CheckoutModalContext } from '../contexts/CheckoutModal'

export const useModalTheme = () => {
  const { theme } = useContext(CheckoutModalContext)

  return theme
}