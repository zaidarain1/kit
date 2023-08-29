import { useContext } from 'react'
import { useWalletModalContext } from '../contexts/WalletModal'

export const useOpenWalletModal = () => {
  const { setOpenWalletModal } = useWalletModalContext()

  return setOpenWalletModal
}