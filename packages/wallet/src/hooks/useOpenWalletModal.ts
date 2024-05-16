import { useSnapshot } from 'valtio'

import { setOpenWalletModal, walletModalState } from '../states/WalletModal'

export const useOpenWalletModal = () => {
  const { openWalletModalState } = useSnapshot(walletModalState)

  return { setOpenWalletModal, openWalletModalState }
}
