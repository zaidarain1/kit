import { useState } from 'react'
import { SequenceConnectProvider, getSequenceConnectWallets, THEMES } from '@0xsequence/kit-core'
import {
    apple,
    email,
    facebook,
    google,
    // injected,
    metamask,
    sequence,
    walletConnect } from '@0xsequence/kit-connectors'
import { SequenceConnectWalletProvider } from '@0xsequence/kit-wallet'
import { SequenceConnectCheckoutProvider } from '@0xsequence/kit-checkout'
import Homepage from './components/Homepage'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon } from 'wagmi/chains'

import { ModalThemeContext } from './contexts'

function App() {
  const [useOneTimeClickModal, setUseOneTimeClickModal] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon],
    [publicProvider()],
  )

  const connectors = getSequenceConnectWallets([
    // injected({
    //   chains
    // }),
    google({
      chains
    }),
    facebook({
      chains
    }),
    apple({
      chains
    }),
    email({
      chains
    }), 
    walletConnect({
      chains,
      options: {
        projectId: 'c65a6cb1aa83c4e24500130f23a437d8'
      },
    }),
    metamask({
      chains,
    }),
    sequence({
      chains,
      connect: {
        app: 'Sequence Kit example',
        networkId: 137
      }
    }),
  ])

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors
  })

  const kitConfig = {
    useOneTimeClickModal: useOneTimeClickModal,
    theme: isDarkMode ? THEMES.dark : THEMES.light,
    signIn: {
      logoUrl: isDarkMode ? '/sw-logo-white.svg' : '/sw-logo-black.svg'
    }
  }

  return (
    <WagmiConfig config={config}>
      <SequenceConnectProvider config={kitConfig} >
        <SequenceConnectWalletProvider theme={isDarkMode ? THEMES.dark : THEMES.light}>
          <SequenceConnectCheckoutProvider theme={isDarkMode ? THEMES.dark : THEMES.light}>
            <ModalThemeContext.Provider value={{ setIsDarkMode, isDarkMode }}>
              <Homepage
                setUseOneTimeClickModal={setUseOneTimeClickModal}
                useOneTimeClickModal={useOneTimeClickModal}
              />
            </ModalThemeContext.Provider>
          </SequenceConnectCheckoutProvider>
        </SequenceConnectWalletProvider>
      </SequenceConnectProvider>
    </WagmiConfig>
  );
}

export default App;
