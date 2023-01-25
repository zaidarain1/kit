import React, { useContext } from 'react'
import { ConnectModalContext } from '../contexts/ConnectModal'

export const useOpenConnectModal = () => {
  const { setOpenConnectModal } = useContext(ConnectModalContext)

  return setOpenConnectModal
}