import { CheckoutSettings } from '@0xsequence/kit-checkout'

export const getCheckoutSettings = (address?: string) => {
  const checkoutSettings: CheckoutSettings = {
    sardineCheckout: {
      chainId: 137,
      defaultPaymentMethodType: 'us_debit',
      platform: 'horizon',
      contractAddress: '0xB537a160472183f2150d42EB1c3DD6684A55f74c',
      blockchainNftId: '188',
      recipientAddress: '0xB62397749850CC20054a78737d8E3676a51e3e77',
      quantity: 1,
    },
    orderSummaryItems: [
      {
        chainId: 137,
        contractAddress: '0x631998e91476da5b870d741192fc5cbc55f5a52e',
        tokenId: '65542',
        quantityRaw: '100'
      }
    ]
  }

  return checkoutSettings
}
