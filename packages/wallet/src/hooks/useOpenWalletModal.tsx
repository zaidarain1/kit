import { useContext } from 'react'
import { WalletModalContext } from '../contexts/WalletModal'

export const useOpenWalletModal = () => {
  const { setOpenWalletModal } = useContext(WalletModalContext)

  return setOpenWalletModal
}