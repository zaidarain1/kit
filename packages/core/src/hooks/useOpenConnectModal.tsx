import React, { useContext } from 'react'
import { ConnectModalContext } from '../contexts/ConnectModal'

export const useOpenConnectModal = () => {
  const { setOpenConnectModal } = useContext(ConnectModalContext)
  if (!setOpenConnectModal) {
    throw 'setOpenConnectModal does not exist'
  }

  return setOpenConnectModal
}