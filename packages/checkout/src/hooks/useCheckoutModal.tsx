import { useContext } from 'react'
import { CheckoutModalContext } from '../contexts/CheckoutModal'

export const useCheckoutModal = () => {
  const { triggerCheckout, closeCheckout, settings } = useContext(CheckoutModalContext)

  return { triggerCheckout, closeCheckout, settings }
}