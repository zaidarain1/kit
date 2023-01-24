import React, { useState } from 'react'

import { ConnectModalContext } from '../contexts'

export type EthConnectProvider = {
  children: React.ReactNode
}

export const EthConnectProvider = ({ children }: EthConnectProvider) => {
  const [openConnectModal, setOpenConnectModal] = useState<boolean>(false)

  return (
    <ConnectModalContext.Provider value={{ setOpenConnectModal }}>
      {children}
    </ConnectModalContext.Provider>
  )

}
