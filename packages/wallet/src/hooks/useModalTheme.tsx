import { useContext } from 'react'
import { WalletModalContext } from '../contexts/WalletModal'

export const useModalTheme = () => {
  const { theme } = useContext(WalletModalContext)

  return theme
}