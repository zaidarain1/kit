import React, { useContext } from 'react'
import { useConnectModalContext } from '../contexts/ConnectModal'

export const useOpenConnectModal = () => {
  const { setOpenConnectModal } = useConnectModalContext()

  return setOpenConnectModal
}