import { ethers } from 'ethers'
import { ThemeProvider } from '@0xsequence/design-system'
import { KitProvider, THEMES, KitConfig } from '@0xsequence/kit'
import { getDefaultConnectors } from '@0xsequence/kit-connectors'
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
      projectName: 'Skyweaver',
      // logoUrlDarkMode: 'sw-logo-white.svg',
      // logoUrlLightMode: 'sw-logo-black.svg',
    },
    displayedAssets: [
      // Matic token
      {
        contractAddress: ethers.constants.AddressZero,
        chainId: 137,
      },
      // USDC token
      {
        contractAddress: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        chainId: 137,
      },
      // skyweaver collectibles
      {
        contractAddress: '0x631998e91476da5b870d741192fc5cbc55f5a52e',
        chainId: 137
      }
    ],
  }

  return (
    <ThemeProvider theme='dark'>
      <WagmiConfig config={config}>
        <KitProvider config={kitConfig} >
          <KitWalletProvider>
            <KitCheckoutProvider>
              <Homepage />
            </KitCheckoutProvider>
          </KitWalletProvider>
        </KitProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}

export default App;
