import { Chain } from 'wagmi/chains'
import { Connector } from 'wagmi'
import { getKitConnectWallets } from '@0xsequence/kit'

import {
  apple,
  coinbaseWallet,
  email,
  facebook,
  google,
  metamask,
  sequence,
  twitch,
  walletConnect,
} from './connectors'

interface GetDefaultConnectors {
  chains: Chain[],
  walletConnectProjectId: string,
  projectAccessKey: string,
  appName: string,
  defaultChainId?: number
}

export const getDefaultConnectors = ({
  chains,
  walletConnectProjectId,
  defaultChainId,
  projectAccessKey,
  appName,
}: GetDefaultConnectors): Connector<any, any>[] => {
  let defaultChain = chains[0].id
  
  if (defaultChainId) {
    const chain = chains.find(c => c.id === defaultChainId)
    if (chain) {
      defaultChain = chain.id
    }
  }

  const connectors = getKitConnectWallets([
    coinbaseWallet({
      chains,
      options: {
        appName
      }
    }),
    email({
      chains,
      options: {
        defaultNetwork: defaultChain,
        connect: {
          app: appName,
          projectAccessKey
        }
      }
    }),
    google({
      chains,
      options: {
        defaultNetwork: defaultChain,
        connect: {
          app: appName,
          projectAccessKey
        }
      }
    }),
    facebook({
      chains,
      options: {
        defaultNetwork: defaultChain,
        connect: {
          app: appName,
          projectAccessKey
        }
      }
    }),
    twitch({
      chains,
      options: {
        defaultNetwork: defaultChain,
        connect: {
          app: appName,
          projectAccessKey
        }
      }
    }),
    apple({
      chains,
      options: {
        defaultNetwork: defaultChain,
        connect: {
          app: appName,
          projectAccessKey
        }
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
    sequence({
      chains,
      options: {
        defaultNetwork: defaultChain,
        connect: {
          app: appName,
          projectAccessKey
        }
      }
    })
  ]) 

  return connectors
}