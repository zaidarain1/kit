import React, { createContext } from 'react'

type ConnectModalContext = {
  setOpenConnectModal?: React.Dispatch<React.SetStateAction<boolean>>
}

export const ConnectModalContext = createContext<ConnectModalContext>({})