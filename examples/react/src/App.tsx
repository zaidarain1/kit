import { ethers } from 'ethers'
import qs from 'query-string'
import { ThemeProvider } from '@0xsequence/design-system'
import { KitProvider, THEMES, KitConfig, getKitConnectWallets } from '@0xsequence/kit'
import { getDefaultConnectors, mock } from '@0xsequence/kit-connectors'
import { KitWalletProvider } from '@0xsequence/kit-wallet'
import { KitCheckoutProvider } from '@0xsequence/kit-checkout'
import Homepage from './components/Homepage'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon } from 'wagmi/chains'
import { http } from 'viem'

import '@0xsequence/design-system/styles.css'

function App() {
  // append ?debug=true to url to enable debug mode 
  const { debug } = qs.parse(location.search)
  const isDebugMode = debug === 'true'

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygon, mainnet],
    [publicProvider()],
  )

  const connectors = [
    ...getDefaultConnectors({
      chains,
      walletConnectProjectId: 'c65a6cb1aa83c4e24500130f23a437d8',
      defaultChainId: 137
    }),
    ...(
      isDebugMode
      ?
        getKitConnectWallets([
          mock({
            chains,
            options: {
              chain: polygon,
              account: '0xCb88b6315507e9d8c35D81AFB7F190aB6c3227C9',
              transport: http()
            }
          })
        ])
      : []
    )
  ]

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
      // logoUrl: 'sw-logo-white.svg',
      useMock: isDebugMode
    },
    displayedAssets: [
      // Matic token
      {
        contractAddress: ethers.constants.AddressZero,
        chainId: 137,
      },
      // USDC token
      {
        contractAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
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
    <WagmiConfig config={config}>
      <KitProvider config={kitConfig} >
        <KitWalletProvider>
          <KitCheckoutProvider>
            <div id="app">
              <ThemeProvider root="#app" scope="app" >
                <Homepage />
              </ThemeProvider>
            </div>
          </KitCheckoutProvider>
        </KitWalletProvider>
      </KitProvider>
    </WagmiConfig>
  );
}

export default App;
