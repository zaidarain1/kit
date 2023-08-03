import { useState } from 'react'
import { KitConnectProvider, getKitConnectWallets, THEMES, KitConfig } from '@0xsequence/kit-core'
import {
    apple,
    discord,
    email,
    facebook,
    google,
    // injected,
    metamask,
    sequence,
    walletConnect
  } from '@0xsequence/kit-connectors'
import { KitWalletProvider } from '@0xsequence/kit-wallet'
import { KitCheckoutProvider } from '@0xsequence/kit-checkout'
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

  const connectorsDapp = getKitConnectWallets([
    // injected({
    //   chains
    // }),
    google({
      chains,
      options: {
        defaultNetwork: 137
      }
    }),
    facebook({
      chains,
      options: {
        defaultNetwork: 137
      }
    }),
    apple({
      chains,
      options: {
        defaultNetwork: 137
      }
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
      }
    }),
  ])

  const otcConnectors = getKitConnectWallets([
    email({
      chains
    }),
    google({
      chains,
      options: {
        defaultNetwork: 137
      }
    }),
    discord({
      chains,
      options: {
        defaultNetwork: 137
      }
    }),
    facebook({
      chains,
      options: {
        defaultNetwork: 137
      }
    }),
    apple({
      chains,
      options: {
        defaultNetwork: 137
      }
    })
  ])

  const connectors = useOneTimeClickModal ? otcConnectors : connectorsDapp

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors
  })

  const kitConfig: KitConfig = {
    useOneTimeClickModal: useOneTimeClickModal,
    theme: isDarkMode ? THEMES.dark : THEMES.light,
    signIn: {
      projectName: 'SkyWeaver',
      logoUrl: isDarkMode ? '/sw-logo-white.svg' : '/sw-logo-black.svg'
    }
  }

  return (
    <WagmiConfig config={config}>
      <KitConnectProvider config={kitConfig} >
        <KitWalletProvider theme={isDarkMode ? THEMES.dark : THEMES.light}>
          <KitCheckoutProvider theme={isDarkMode ? THEMES.dark : THEMES.light}>
            <ModalThemeContext.Provider value={{ setIsDarkMode, isDarkMode }}>
              <Homepage
                setUseOneTimeClickModal={setUseOneTimeClickModal}
              />
            </ModalThemeContext.Provider>
          </KitCheckoutProvider>
        </KitWalletProvider>
      </KitConnectProvider>
    </WagmiConfig>
  );
}

export default App;
