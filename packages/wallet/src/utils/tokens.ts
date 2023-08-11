import { ethers } from 'ethers'
import { TokenBalance, GetTransactionHistoryReturn, Transaction } from '@0xsequence/indexer'
import { TokenPrice } from '@0xsequence/api'
import { InfiniteData } from '@tanstack/react-query'

import { vars } from '@0xsequence/design-system'

import { compareAddress } from './helpers'
export interface NativeTokenInfo {
  name: string,
  symbol: string,
  logoURI: string,
  decimals: number
}

export const getChainIdList = () => {
  return [1,137,56,43114]
}

export const getNativeTokenInfoByChainId = (chainId: number) => {
  interface TokenInfos {
    [key: number]: NativeTokenInfo
  }

  const tokenInfos: TokenInfos = {
    1: {
      name: 'Ethereum',
      symbol: 'ETH',
      logoURI: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png',
      decimals: 18,
    },
    137: {
      name: 'Polygon',
      symbol: 'MATIC',
      logoURI: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png',
      decimals: 18,
    },
    56: {
      name: 'BNB',
      symbol: 'BNB',
      logoURI: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png',
      decimals: 18,
    },
    43114: {
      name: 'Avalanche',
      symbol: 'AVAX',
      logoURI: 'https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png',
      decimals: 18,
    },
  }

  return tokenInfos[chainId] || tokenInfos[1]
}

export const getPercentageColor = (value: number) => {
  if(value > 0) {
    return vars.colors.positive
  } else if (value < 0) {
    return vars.colors.negative
 } else {
  return vars.colors.text50
 }
}

export const getPercentagePriceChange = (balance: TokenBalance, prices: TokenPrice[]) => {
  const priceForToken = prices.find(p => compareAddress(p.token.contractAddress, balance.contractAddress))
  if (!priceForToken) {
    return 0;
  }

  const price24HourChange = priceForToken?.price24hChange?.value || 0
  return price24HourChange
}

export const computeBalanceFiat = (balance: TokenBalance, prices: TokenPrice[]): string => {
  let totalUsd = 0

  const priceForToken = prices.find(p => compareAddress(p.token.contractAddress, balance.contractAddress))
  if (!priceForToken) {
    return '0.00';
  }
  const priceFiat = priceForToken.price?.value || 0
  let decimals = balance.contractInfo?.decimals || 18
  if (balance.contractType === 'ERC721' || balance.contractType === 'ERC1155') {
    decimals = balance.tokenMetadata?.decimals || 0
  }
  const valueFormatted = ethers.utils.formatUnits(balance.balance, decimals)
  const usdValue = parseFloat(valueFormatted) * priceFiat
  totalUsd += usdValue

return `${totalUsd.toFixed(2)}`
}


interface SortBalancesByTypeReturn {
  nativeTokens: TokenBalance[],
  erc20Tokens: TokenBalance[],
  collectibles: TokenBalance[]
}

export const sortBalancesByType = (balances: TokenBalance[]): SortBalancesByTypeReturn => {
  const nativeTokens: TokenBalance[] = []
  const erc20Tokens: TokenBalance[] = []
  const collectibles: TokenBalance[] = []
  
  balances.forEach((balance) => {
    // Note: contractType for the native token should be "UNKNOWN"
    if (balance.contractAddress === ethers.constants.AddressZero) {
      nativeTokens.push(balance)
    } else if (balance.contractType === 'ERC20') {
      erc20Tokens.push(balance)
    } else if (balance.contractType === 'ERC721' || balance.contractType === 'ERC1155') {
      collectibles.push(balance)
    }
  })

  return {
    nativeTokens,
    erc20Tokens,
    collectibles
  }
}

export const flattenPaginatedTransactionHistory = (
  transactionHistoryData: InfiniteData<GetTransactionHistoryReturn> | undefined
) => {
  const transactionHistory: Transaction[] = []

  transactionHistoryData?.pages.forEach(page => {
    transactionHistory.push(...page.transactions)
  })

  return transactionHistory
}