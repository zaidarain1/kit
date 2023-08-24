import { CheckoutSettings } from '@0xsequence/kit-checkout'
import { abi } from '../constants'

export const getCheckoutSettings = (address?: string) => {
  const deadline = String(Math.round(new Date().getTime()/ 1000) + 3600)

  const usdcAmount = '1'

  const checkoutSettings: CheckoutSettings = {
    chainId: 137,
    receiptTitle: 'Custom Sequence Kit Checkout Demo',
    abi: JSON.stringify(abi),
    methodName: 'buyTokens',
    methodArguments: {
      "_recipient":"$WALLET",
      "_deadline": deadline,
      "_maxCurrency": `${Number(usdcAmount) * 10 ** 6}`,
      "_tokenIds":["65570"],
      "_tokensBoughtAmounts":["100"],
      "_extraFeeRecipients":[],
      "_extraFeeAmounts":[]
    },
    recipientAddress: address || '',
    contractAddress: '0x8bb759bb68995343ff1e9d57ac85ff5c5fb79334',
    currency: 'USDC',
    currencyAmount: `${usdcAmount}`,
    collectionContractAddress: '0x631998e91476da5b870d741192fc5cbc55f5a52e',
    onSuccess: () => { console.log('success') },
    onError: () => { console.log('error') },
  }

  return checkoutSettings
}