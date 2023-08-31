import { Chain } from 'wagmi/chains'
import { Connector } from 'wagmi'
import { getKitConnectWallets } from '@0xsequence/kit-core'

import {
  email,
  facebook,
  google,
  metamask,
  walletConnect
} from './connectors'

interface GetDefaultConnectors {
  chains: Chain[],
  walletConnectProjectId: string
}

export const getDefaultConnectors = ({
  chains,
  walletConnectProjectId,
}: GetDefaultConnectors): Connector<any, any>[] => {
  const defaultChainId = chains[0].id
  
  const connectors = getKitConnectWallets([
    email({ chains }),
    google({
      chains,
      options: {
        defaultNetwork: defaultChainId
      }
    }),
    facebook({
      chains,
      options: {
        defaultNetwork: 137
      }
    }),
    metamask({
      chains,
    }),
    walletConnect({
      chains,
      options: {
        projectId: walletConnectProjectId
      },
    }),
  ]) 

  return connectors
}