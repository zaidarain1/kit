import { createGenericContext, Theme } from '@0xsequence/kit'

interface CoinQuantity {
  contractAddress: string
  amountRequiredRaw: string
}

interface OrderSummaryItem {
  chainId: number
  contractAddress: string
  tokenId: string
  quantityRaw: string
}

export interface CheckoutSettings {
  sardineCheckout?: {
    defaultPaymentMethodType: 'us_debit' | 'us_credit' | 'international_debit' | 'international_credit' | 'ach'
    chainId: number
    platform: string
    contractAddress: string
    blockchainNftId: string
    recipientAddress: string
    quantity: string
    decimals?: string
    onSuccess?: (transactionHash: string) => void
    onError?: (error: Error) => void
  }
  cryptoCheckout?: {
    chainId: number
    triggerTransaction: () => void
    coinQuantity: CoinQuantity
  }
  orderSummaryItems: OrderSummaryItem[]
}

type CheckoutModalContext = {
  triggerCheckout: (settings: CheckoutSettings) => void
  closeCheckout: () => void
  settings?: CheckoutSettings
  theme: Theme
}

export const [useCheckoutModalContext, CheckoutModalContextProvider] = createGenericContext<CheckoutModalContext>()
