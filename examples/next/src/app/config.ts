'use client'

import { findNetworkConfig, allNetworks } from '@0xsequence/network'
import { CreateConnectorFn, createConfig, http } from 'wagmi'
import { Transport } from 'viem'
import { arbitrumNova, arbitrumSepolia, mainnet, polygon } from 'viem/chains'
import { getDefaultConnectors } from '@0xsequence/kit-connectors'

const walletConnectProjectId = 'c65a6cb1aa83c4e24500130f23a437d8'
const projectAccessKey = 'AQAAAAAAAEGvyZiWA9FMslYeG_yayXaHnSI'

const chains = [arbitrumNova, arbitrumSepolia, mainnet, polygon] as const
const transports = chains.reduce<Record<number, Transport>>((acc, chain) => {
  const network = findNetworkConfig(allNetworks, chain.id)

  if (network) {
    acc[chain.id] = http(network.rpcUrl)
  }

  return acc
}, {})

const connectors: CreateConnectorFn[] = [
  ...getDefaultConnectors({
    walletConnectProjectId,
    defaultChainId: arbitrumNova.id,
    appName: 'demo app',
    projectAccessKey
  })
  // ...(isDebugMode
  //   ? getKitConnectWallets(projectAccessKey, [
  //       mock({
  //         accounts: ['0xCb88b6315507e9d8c35D81AFB7F190aB6c3227C9']
  //       })
  //     ])
  //   : [])
]

export const config = createConfig({
  chains,
  transports,
  connectors,
  ssr: true // For Next.js SSR support
})
