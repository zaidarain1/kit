import { ethers } from 'ethers'
import { Chain } from 'wagmi'
import { MockConnector } from 'wagmi/connectors/mock'
import type { Wallet } from '@0xsequence/kit'
import { createWalletClient, http, PublicClient, FallbackTransport } from 'viem'
import { polygon } from 'viem/chains'

import { SequenceLogo } from '../sequence/SequenceLogo'

export interface MockFlags {
  isAuthorized?: boolean,
  failConnect?: boolean,
  failSwitchChain?: boolean,
  noSwitchChain?: boolean
}

export interface MockParams {
  chains: Chain[];
  options: MockOptions
}

export interface MockOptions {
  chain?: Chain,
  flags?:MockFlags
  account: `0x${string}`,
  transport: any,
}

export const mock = ({ chains, options }: MockParams) => ({
  id: 'mock',
  isSequenceBased: true,
  logoDark: SequenceLogo,
  logoLight: SequenceLogo,
  // iconBackground: '#777',
  name: 'Mock',
  createConnector: () => {
    const connector = new MockConnector({
      chains,
      options: {
        chainId: options?.chain?.id || 137,
        walletClient: createWalletClient({
          account: options.account,
          chain: options?.chain || polygon,
          // Get transport from publicClient
          // publicClient({ chainId }).transport
          transport: options.transport
        }),
        ...options,
      }
    });
    return connector
  }
}) as Wallet