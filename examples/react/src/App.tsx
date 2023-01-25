import { EthConnectProvider} from '@ethconnect/core'
import Homepage from './components/Homepage'

import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

function App() {
  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet, polygon],
    [publicProvider()],
  )
  
  const client = createClient({
    autoConnect: false,
    provider,
    webSocketProvider,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'ethconnect example',
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }),
    ],
  })


  return (
    <WagmiConfig client={client}>
      <EthConnectProvider>
        <Homepage />
      </EthConnectProvider>
    </WagmiConfig>

  );
}

export default App;
