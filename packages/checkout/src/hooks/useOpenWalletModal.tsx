import { useContext } from 'react'
import { CheckoutModalContext } from '../contexts/CheckoutModal'

export const useOpenCheckoutModal = () => {
  const { setOpenCheckoutModal } = useContext(CheckoutModalContext)

  return setOpenCheckoutModal
}