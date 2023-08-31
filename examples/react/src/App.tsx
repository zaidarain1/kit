import { ThemeProvider } from '@0xsequence/design-system'
import { KitCoreProvider, THEMES, KitConfig } from '@0xsequence/kit-core'
import {
  getDefaultConnectors,
} from '@0xsequence/kit-connectors'
import { KitWalletProvider } from '@0xsequence/kit-wallet'
import { KitCheckoutProvider } from '@0xsequence/kit-checkout'
import Homepage from './components/Homepage'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon } from 'wagmi/chains'

import '@0xsequence/design-system/styles.css'

function App() {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygon, mainnet],
    [publicProvider()],
  )

  const connectors = getDefaultConnectors({
    chains,
    walletConnectProjectId: 'c65a6cb1aa83c4e24500130f23a437d8',
    defaultChainId: 137
  })

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors
  })

  const kitConfig: KitConfig = {
    defaultTheme: THEMES.dark,
    signIn: {
      projectName: 'SkyWeaver',
      logoUrlDarkMode: '/sw-logo-white.svg',
      logoUrlLightMode: '/sw-logo-black.svg',
    }
  }

  return (
    <ThemeProvider theme='dark'>
      <WagmiConfig config={config}>
        <KitCoreProvider config={kitConfig} >
          <KitWalletProvider>
            <KitCheckoutProvider>
              <Homepage />
            </KitCheckoutProvider>
          </KitWalletProvider>
        </KitCoreProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}

export default App;
