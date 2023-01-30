Ethconnect
==========

Ethconnect is a library enabling developers to easily integrate web3 wallets in their app. It is based on [wagmi](https://wagmi.sh/) and all functionality from wagmi, such as hooks, can be used.

## Usage
### Installing the Library

`npm install @ethconnect/core wagmi`

or

`pnpm install @ethconnect/core wagmi`

or

`yarn add @ethconnect/core wagmi`

### Installing Wallets
Official wallets can be installed by running:

`npm install @ethconnect/wallets wagmi`

or

`pnpm install @ethconnect/wallets wagmi`

or

`yarn add @ethconnect/wallets wagmi`

### Setting up the Library
React apps must be wrapped by a Wagmi client and the EthConnnectProvider components. It is important that the Wagmi wrapper comes before the Ethconnect wrapper.

```js
import { EthConnectProvider, getEthConnectWallets } from '@ethconnect/core'
import { sequenceWallet, metamaskWallet, injectedWallet, walletConnectWallet } from '@ethconnect/wallets'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon } from 'wagmi/chains'

import MyPage from './components/MyPage'

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
      <EthConnectProvider>
        <MyPage />
      </EthConnectProvider>
    </WagmiConfig>
  );
}

```

### Opening the Modal
Wallet selection is done through a modal which can be called programmatically.

```js
import { useOpenConnectModal } from '@ethconnect/core'
import { useDisconnect, useAccount, useSigner, useProvider } from 'wagmi'


const MyReactComponent = () => {
    const openConnectModal = useOpenConnectModal()

      const { isConnected } = useAccount()

    const openTheModal = () => {
      if (openConnectModal) {
        openConnectModal(true)
      }
    }

    return (
      <>
        {!isConnected && (
          <button onClick={openTheModal}>
            Open Modal
          </button>
        )}
      </>
    )
}
```



## Packages

- [@ethconnect/examples-react](./packages/examples-react)
- [@ethconnect/core](./packages/core)
- [@ethconnect/wallets](./packages/wallets)


## Local Development
The React example can be used to test the library locally.

1. pnpm install
2. pnpm watch
3. pnpm start:react


## LICENSE

Apache-2.0

Copyright (c) 2017-present Horizon Blockchain Games Inc. / https://horizon.io
