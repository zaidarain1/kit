'use client'

import { KitConfig, KitProvider } from '@0xsequence/kit'
import { KitCheckoutProvider } from '@0xsequence/kit-checkout'
import { KitWalletProvider } from '@0xsequence/kit-wallet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Config, WagmiProvider } from 'wagmi'

const queryClient = new QueryClient()

export interface ProvidersProps {
  wagmiConfig: Config
  kitConfig: KitConfig
  children: React.ReactNode
}

export const Providers = (props: ProvidersProps) => {
  const { wagmiConfig, kitConfig, children } = props

  return (
    <WagmiProvider config={wagmiConfig}>
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
