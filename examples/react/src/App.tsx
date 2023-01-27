// import { SequenceConnector } from '@0xsequence/wagmi-connector'
import { EthConnectProvider, getEthConnectWallets } from '@ethconnect/core'
import { sequenceWallet, metamaskWallet, injectedWallet } from '@ethconnect/wallets'
import Homepage from './components/Homepage'
import * as wagmi from 'wagmi'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

function App() {
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
    // TODO: integrate wallet connect
    // walletConnectWallet({
    //   chains,
    //   options: {
    //     qrcode: true,
    //   },
    // })
  ])

  
  const client = createClient({
    autoConnect: false,
    provider,
    webSocketProvider,
    connectors
  })


  return (
    <WagmiConfig client={client}>
      <EthConnectProvider wagmi={wagmi}>
        <Homepage />
      </EthConnectProvider>
    </WagmiConfig>

  );
}

export default App;
