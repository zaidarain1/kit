import { useState } from 'react'
import { SequenceConnectProvider, getSequenceConnectWallets, THEMES } from '@sequenceConnect/core'
import { sequenceWallet, metamaskWallet, injectedWallet, walletConnectWallet } from '@sequenceConnect/wallets'
import Homepage from './components/Homepage'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon } from 'wagmi/chains'

import { ModalThemeContext } from './contexts'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet, polygon],
    [publicProvider()],
  )

  const connectors = getSequenceConnectWallets([
    injectedWallet({
      chains
    }),
    sequenceWallet({
      chains,
      connect: {
        app: 'Ethconnect example',
        networkId: 137
      }
    }),
    metamaskWallet({
      chains,
    }),
    walletConnectWallet({
      chains,
      options: {
        projectId: 'c65a6cb1aa83c4e24500130f23a437d8'
      },
    })
  ])

  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
    connectors
  })


  return (
    <WagmiConfig client={client}>
      <SequenceConnectProvider theme={isDarkMode ? THEMES.dark : THEMES.light}>
        <ModalThemeContext.Provider value={{ setIsDarkMode, isDarkMode }}>
          <Homepage />
        </ModalThemeContext.Provider>
      </SequenceConnectProvider>
    </WagmiConfig>
  );
}

export default App;
