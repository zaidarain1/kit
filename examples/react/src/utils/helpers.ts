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

export const getCheckoutSettings = (
  blockchainNftId: string,
  recipientAddress: string,
  tokenContractAddress: string,
  tokenId: string
) => {
  const checkoutSettings: CheckoutSettings = {
    sardineCheckout: {
      authToken: '', // TODO: remove, use token from api
      chainId: 137,
      defaultPaymentMethodType: 'us_debit',
      platform: 'horizon',
      contractAddress: '0xB537a160472183f2150d42EB1c3DD6684A55f74c',
      blockchainNftId: blockchainNftId,
      recipientAddress: recipientAddress,
      quantity: 1
    },
    orderSummaryItems: [
      {
        chainId: 137,
        contractAddress: tokenContractAddress,
        tokenId: tokenId,
        quantityRaw: '1'
      }
    ]
  }

  return checkoutSettings
}
