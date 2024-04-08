import { createGenericContext, Theme } from '@0xsequence/kit'

interface CoinQuantity {
  contractAddress: string
  amountRequiredRaw: string
}

export interface OrderSummaryItem {
  chainId: number
  contractAddress: string
  tokenId: string
  quantityRaw: string
}

export interface SardineCheckout {
  defaultPaymentMethodType: 'us_debit' | 'us_credit' | 'international_debit' | 'international_credit' | 'ach'
  chainId: number
  platform: string
  contractAddress: string
  blockchainNftId: string
  recipientAddress: string
  quantity: number
  decimals?: number
  onSuccess?: (transactionHash: string) => void
  onError?: (error: Error) => void
}

export interface CheckoutSettings {
  sardineCheckout?: SardineCheckout
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
