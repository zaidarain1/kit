import { Chain } from 'wagmi/chains'
import { Connector } from 'wagmi'
import { getKitConnectWallets } from '@0xsequence/kit'

import {
  email,
  facebook,
  google,
  metamask,
  walletConnect,
  discord,
  apple
} from './connectors'

interface GetDefaultConnectors {
  chains: Chain[],
  walletConnectProjectId: string,
  defaultChainId?: number
}

export const getDefaultConnectors = ({
  chains,
  walletConnectProjectId,
  defaultChainId,
}: GetDefaultConnectors): Connector<any, any>[] => {
  let defaultChain = chains[0].id
  
  if (defaultChainId) {
    const chain = chains.find(c => c.id === defaultChainId)
    if (chain) {
      defaultChain = chain.id
    }
  }

  const connectors = getKitConnectWallets([
    email({ chains }),
    google({
      chains,
      options: {
        defaultNetwork: defaultChain
      }
    }),
    facebook({
      chains,
      options: {
        defaultNetwork: defaultChain
      }
    }),
    discord({
      chains
    }),
    apple({
      chains
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