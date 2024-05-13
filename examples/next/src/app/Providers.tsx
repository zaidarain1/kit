'use client'

import { KitProvider } from '@0xsequence/kit/components'
import { KitCheckoutProvider } from '@0xsequence/kit-checkout'
import { KitWalletProvider } from '@0xsequence/kit-wallet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { State, WagmiProvider } from 'wagmi'

import { kitConfig, wagmiConfig } from '@/config'

const queryClient = new QueryClient()

export interface ProvidersProps {
  initialState: State | undefined
  children: React.ReactNode
  // wagmiConfig: Config
  // kitConfig: KitConfig
}

export const Providers = (props: ProvidersProps) => {
  const { initialState, children /* , wagmiConfig, kitConfig */ } = props

  console.log('initialState', initialState)

  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <KitProvider config={kitConfig}>
          <KitWalletProvider>
            <KitCheckoutProvider>{children}</KitCheckoutProvider>
          </KitWalletProvider>
        </KitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
