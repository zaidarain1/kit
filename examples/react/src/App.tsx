import { useState } from 'react'
import { EthConnectProvider, getEthConnectWallets, THEMES } from '@ethconnect/core'
import { sequenceWallet, metamaskWallet, injectedWallet, walletConnectWallet } from '@ethconnect/wallets'
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

  const connectors = getEthConnectWallets([
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
        qrcode: true,
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
      <EthConnectProvider theme={isDarkMode ? THEMES.dark : THEMES.light}>
        <ModalThemeContext.Provider value={{ setIsDarkMode, isDarkMode }}>
          <Homepage />
        </ModalThemeContext.Provider>
      </EthConnectProvider>
    </WagmiConfig>
  );
}

export default App;
