Sequence Kit Checkout
==========================

<div align="center">
  <img src="../../public/docs/checkout-modal.png">
</div>

Checkout modal for Sequence Kit.
Will display a list of collectibles and allows either checking out with a credit card or through crypto directly.

# Installing the module
First install the package:

```bash
npm install @0xsequence/kit-checkout
# or
npm install @0xsequence/kit-checkout
# or
yarn add @0xsequence/kit-checkout
```

Then the wallet provider module must placed below the Sequence Kit Core provider.

```js
import { KitCheckoutProvider } from '@0xsequence/kit-checkout'


const App = () => {
  return (
    <WagmiConfig config={config}>
      <KitProvider>
        <KitCheckoutProvider>
          <Page />
        </KitCheckoutProvider>
      </KitProvider>
    </WagmiConfig>
  )
}
```


## Open the checkout modal
The `useCheckoutModal` hook must be used to open the modal.
Furthermore, it is necessary to pass a settings object.

```js
  import { useCheckoutModal } from '@0xsequence/kit-checkout'

  const { triggerCheckout } = useCheckoutModal()
  
  const checkoutSettings = {...}
  
  triggerCheckout(checkoutSettings)
```


## Configuration
The react example has an example configuration for setting up the checkout.

Example [settings](../../examples/react/src/utils/settings.ts)

```js
const checkoutSettings = {
  creditCardCheckout: {...},
  cryptoCheckout: {...},
  orderSummaryItems: {...}
}
```

### creditCardCheckout
The `creditCardCheckout` setting of the settings object contains information that will be passed to [Paper](https://getpaper.xyz/).

View the paper documentation for [more information](https://docs.withpaper.com/reference/create-checkout-elements-client-secret).

If this field is empty the credit card checkout button will not be visible.

### cryptoCheckout
The `cryptoCheckout` specifies settings regarding checking out with crypto.
An example usecase might be interacting with a minting contract.

The actual cryptoTransaction must be passed down to the `triggerTransaction` field.

```js
cons checkoutConfig = {
  {...},
  cryptoCheckout: {
    chainId: 137,
    triggerTransaction: async () => { console.log('triggered transaction') },
    coinQuantity: {
      contractAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      amountRequiredRaw: '10000000000'
    },
  },
}
```

### orderSummaryItems
This field specific the list of collectibles that will show up in the order summary.

```js
    orderSummaryItems: [
      {
        contractAddress: '0x631998e91476da5b870d741192fc5cbc55f5a52e',
        tokenId: '66597',
        quantityRaw: '100'
      },
    ]
```