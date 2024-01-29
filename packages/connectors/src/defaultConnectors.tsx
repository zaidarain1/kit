import { Chain } from 'wagmi/chains'
import { CreateConnectorFn } from 'wagmi'
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
  walletConnectProjectId: string,
  projectAccessKey: string,
  appName: string,
  defaultChainId?: number
}

export const getDefaultConnectors = ({
  walletConnectProjectId,
  defaultChainId,
  projectAccessKey,
  appName,
}: GetDefaultConnectors): CreateConnectorFn<any, any, any>[] => {
  const connectors = getKitConnectWallets([
    coinbaseWallet({
      appName
    }),
    email({
      defaultNetwork: defaultChainId,
      projectAccessKey,
      connect: {
        app: appName,
        projectAccessKey
      }
    }),
    google({
      defaultNetwork: defaultChainId,
      projectAccessKey,
      connect: {
        app: appName,
        projectAccessKey
      }
    }),
    facebook({
      defaultNetwork: defaultChainId,
      projectAccessKey,
      connect: {
        app: appName,
        projectAccessKey
      }
    }),
    twitch({
      defaultNetwork: defaultChainId,
      projectAccessKey,
      connect: {
        app: appName,
        projectAccessKey
      }
    }),
    apple({
      defaultNetwork: defaultChainId,
      projectAccessKey,
      connect: {
        app: appName,
        projectAccessKey
      }
    }),
    metamask(),
    walletConnect({
      projectId: walletConnectProjectId
    }),
    sequence({
      defaultNetwork: defaultChainId,
      projectAccessKey,
      connect: {
        app: appName,
        projectAccessKey
      }
    })
  ])

  return connectors
}