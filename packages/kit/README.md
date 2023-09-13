Sequence Kit Core Package 
============

The core package is required to in order to use the other Kit modules such as the embedded wallet.

## Quick Start
### Installing the Library
`@0xsequence/kit` is the core package. Any extra modules require this package to be installed first.
To install this package:

```bash
npm install @0xsequence/kit @0xsequence/kit-connectors wagmi ethers@5.7.2 viem 0xsequence
# or
pnpm install @0xsequence/kit @0xsequence/kit-connectors wagmi ethers@5.7.2 viem 0xsequence
# or
yarn add @0xsequence/kit @0xsequence/kit-connectors wagmi ethers@5.7.2 viem 0xsequence
```

### Setting up the Library
React apps must be wrapped by a Wagmi client and the KitWalletProvider components. It is important that the Wagmi wrapper comes before the Sequence Kit wrapper.


```js
import MyPage from './components/MyPage'
import { KitProvider } from '@0xsequence/kit'
import { getDefaultConnectors } from '@0xsequence/kit-connectors'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon } from 'wagmi/chains'

function App() {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygon, mainnet],
    [publicProvider()],
  )

  const connectors = getDefaultConnectors({
    chains,
    walletConnectProjectId: 'project_id',
    defaultChainId: 137
  })

  
  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors
  })

  return (
    <WagmiConfig client={client}>
      <KitProvider>
        <MyPage />
      </KitProvider>
    </WagmiConfig>
  );
}
```
### Opening the Sign in Modal
<div align="center">
  <img src="public/docs/sign-in-modal.png">
</div>

Wallet selection is done through a modal which can be called programmatically.

```js
import { useOpenConnectModal } from '@0xsequence/kit'
import { useDisconnect, useAccount, useSigner, useProvider } from 'wagmi'


const MyReactComponent = () => {
  const { setOpenConnectModal } = useOpenConnectModal()

  const { isConnected } = useAccount()

  const onClick = () => {
    setOpenConnectModal(true)
  }

  return (
    <>
      {!isConnected && (
        <button onClick={onClick}>
          Sign in
        </button>
      )}
    </>
  )
}
```

## Hooks
### useOpenConnectModal
Use the `useOpenConnectModal` to change to open or close the connection modal.

```js
import { useOpenConnectModal } from '@0xsequence/kit'
// ...
  const { setOpenConnectModal } = useOpenConnectModal()
  setOpenConnectModal(true)

```

### useTheme
Use the `useTheme` hook to get information about the current theme, such as light or dark, or set it to something else.

```js
import { useTheme } from '@0xsequence/kit'
  const { theme, setTheme } = useTheme()

  setTheme('light')
```

## Customization
The `KitProvider` wrapper can accept an optional config object.
```js

  const kitConfig =  {
    defaultTheme: 'light',
    position: 'top-left',
    signIn: {
      logoUrlDarkMode: 'https://logo-dark-mode.svg',
      logoUrlLightMode: 'https://logo-light-mode.svg',
      projectName: 'my app',
      showEmailInput: true,
      miniAuthOptions: ['google', 'discord', 'facebook', 'apple'],
      authOptions: ['metamask', 'wallet-connect']
    };
  }

  <KitProvider config={kitConfig}>
    <App />
  <KitProvider>
```

## What to do next?
Now that the core packge is installed, you can install the [embedded wallet](../wallet) or take a look at the [checkout](../checkout/).


## LICENSE

Apache-2.0

Copyright (c) 2017-present Horizon Blockchain Games Inc. / https://horizon.io
