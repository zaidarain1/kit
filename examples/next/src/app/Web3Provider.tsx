'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
// import { KitProvider } from '@0xsequence/kit'

import { config } from './config'

const queryClient = new QueryClient()

// const kitConfig: KitConfig = {
//   defaultTheme: 'dark',
//   signIn: {
//     projectName: 'Kit Demo'
//     // logoUrl: 'sw-logo-white.svg',
//     // useMock: isDebugMode
//   },
//   displayedAssets: [
//     // Native token
//     {
//       contractAddress: '0x0000000000000000000000000000000000000000',
//       chainId: 42170
//     },
//     // Native token
//     {
//       contractAddress: '0x0000000000000000000000000000000000000000',
//       chainId: 421614
//     },
//     // Waas demo NFT
//     {
//       contractAddress: '0x0d402c63cae0200f0723b3e6fa0914627a48462e',
//       chainId: 42170
//     },
//     // Waas demo NFT
//     {
//       contractAddress: '0x0d402c63cae0200f0723b3e6fa0914627a48462e',
//       chainId: 421614
//     },
//     // Skyweaver assets
//     {
//       contractAddress: '0x631998e91476da5b870d741192fc5cbc55f5a52e',
//       chainId: 137
//     }
//   ]
// }

export interface Web3ProviderProps {
  children: React.ReactNode
}

export const Web3Provider = (props: Web3ProviderProps) => {
  const { children } = props

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* <KitProvider config={kitConfig}>{children}</KitProvider> */}
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
