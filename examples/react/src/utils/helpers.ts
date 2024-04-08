import { CheckoutSettings } from '@0xsequence/kit-checkout'

export const truncateAtMiddle = (text: string, truncateAt: number) => {
  let finalText = text

  if (text.length >= truncateAt) {
    finalText = text.slice(0, truncateAt / 2) + '...' + text.slice(text.length - truncateAt / 2, text.length)
  }

  return finalText
}

export const formatAddress = (text: string) => {
  return `0x${truncateAtMiddle(text?.substring(2) || '', 8)}`
}

export const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const getCheckoutSettings = (address?: string) => {
  const checkoutSettings: CheckoutSettings = {
    sardineCheckout: {
      chainId: 137,
      defaultPaymentMethodType: 'us_debit',
      platform: 'horizon',
      contractAddress: '0xB537a160472183f2150d42EB1c3DD6684A55f74c',
      blockchainNftId: '860',
      recipientAddress: '0xB62397749850CC20054a78737d8E3676a51e3e77',
      quantity: 1,
      decimals: 2
    },
    orderSummaryItems: [
      {
        chainId: 137,
        contractAddress: '0x631998e91476da5b870d741192fc5cbc55f5a52e',
        tokenId: '262150',
        quantityRaw: '1'
      }
    ]
  }

  return checkoutSettings
}
