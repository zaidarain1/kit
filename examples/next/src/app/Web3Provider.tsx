'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
// import { KitProvider } from '@0xsequence/kit'

import { wagmiConfig /*, kitConfig */ } from './config'

const queryClient = new QueryClient()

export interface Web3ProviderProps {
  children: React.ReactNode
}

export const Web3Provider = (props: Web3ProviderProps) => {
  const { children } = props

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {/* <KitProvider config={kitConfig}>{children}</KitProvider> */}
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
