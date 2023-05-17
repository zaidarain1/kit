import { useState } from 'react'
import { SequenceConnectProvider, getSequenceConnectWallets, THEMES } from '@0xsequence/kit-core'
import { sequence, metamask, injected, walletConnect } from '@0xsequence/kit-connectors'
import { SequenceConnectWalletProvider } from '@0xsequence/kit-wallet'
import { SequenceConnectCheckoutProvider } from '@0xsequence/kit-checkout'
import Homepage from './components/Homepage'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon } from 'wagmi/chains'

import { ModalThemeContext } from './contexts'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon],
    [publicProvider()],
  )

  const connectors = getSequenceConnectWallets([
    injected({
      chains
    }),
    sequence({
      chains,
      connect: {
        app: 'Sequence Kit example',
        networkId: 137
      }
    }),
    metamask({
      chains,
    }),
    walletConnect({
      chains,
      options: {
        projectId: 'c65a6cb1aa83c4e24500130f23a437d8'
      },
    })
  ])

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors
  })

  return (
    <WagmiConfig config={config}>
      <SequenceConnectProvider theme={isDarkMode ? THEMES.dark : THEMES.light}>
        <SequenceConnectWalletProvider theme={isDarkMode ? THEMES.dark : THEMES.light}>
          <SequenceConnectCheckoutProvider theme={isDarkMode ? THEMES.dark : THEMES.light}>
            <ModalThemeContext.Provider value={{ setIsDarkMode, isDarkMode }}>
              <Homepage />
            </ModalThemeContext.Provider>
          </SequenceConnectCheckoutProvider>
        </SequenceConnectWalletProvider>
      </SequenceConnectProvider>
    </WagmiConfig>
  );
}

export default App;
