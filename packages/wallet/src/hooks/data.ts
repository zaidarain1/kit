import { TokenBalance } from '@0xsequence/indexer'
import { ethers } from 'ethers'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import {
  fetchBalances,
  GetTokenBalancesArgs,
  fetchCollectionBalance,
  GetCollectionBalanceArgs,
  getCoinPrices,
  GetCoinPricesArgs,
  fetchBalancesAssetsSummary,
  getNativeToken,
  getTokenBalances,
  getCollectibleBalance,
  GetCollectibleBalanceArgs,
  getCollectiblePrices,
  GetCollectiblePricesArgs,
  getTransactionHistory,
  GetTransactionHistoryArgs,
  fetchFiatConversionRate,
  FetchFiatConversionRateArgs,
} from '../api/data'

import { compareAddress } from '../utils/helpers'

export const time = {
  oneSecond: 1 * 1000,
  oneMinute: 60 * 1000,
  oneHour: 60 * 60 * 1000
}

export const useBalances = (args: GetTokenBalancesArgs) =>
  useQuery({
    queryKey: ['balances', args],
    queryFn: () => fetchBalances(args),
    retry: true,
    staleTime: 10 * time.oneMinute,
    enabled: !!args.chainId && !!args.accountAddress
  })

export const useCollectionBalance = (args: GetCollectionBalanceArgs) =>
  useQuery({
    queryKey: ['collectionBalance', args],
    queryFn: () => fetchCollectionBalance(args),
    retry: true,
    staleTime: 10 * time.oneMinute,
    enabled: !!args.chainId && !!args.accountAddress && !!args.collectionAddress
  })

export const useCoinPrices = ({
  disabled,
  ...args
}: GetCoinPricesArgs & { disabled?: boolean } ) =>
  useQuery({
    queryKey: ['coinPrices', args],
    queryFn: () => getCoinPrices(args),
    retry: true,
    staleTime: 1 * time.oneMinute,
    enabled: args.tokens.length > 0 && !disabled
  })
    
export const useBalancesAssetsSummary = (args: GetTokenBalancesArgs) => (
  useQuery({
    queryKey: ['balancesAssetsSummary', args],
    queryFn: () => fetchBalancesAssetsSummary(args),
    retry: true,
    staleTime: 10 * time.oneMinute,
    enabled: !!args.chainId && !!args.accountAddress
  }))

export const useCoinBalance = (args: GetTokenBalancesArgs) =>
  useQuery({
    queryKey: ['coinBalance', args],
    queryFn: (): Promise<TokenBalance> => {
      if (compareAddress(args?.contractAddress || '', ethers.constants.AddressZero)) {
        const response = getNativeToken({
          accountAddress: args.accountAddress,
          chainId: args.chainId,
        }).then(response => response[0])
        return response
      }
      const response = getTokenBalances(args).then(response => response[0])
      return response
    },
    retry: true,
    staleTime: 1 * time.oneMinute,
    enabled: !!args.chainId && !!args.accountAddress
})

export const useCollectibleBalance = (args: GetCollectibleBalanceArgs) => (
  useQuery({
    queryKey: ['collectibleBalance', args],
    queryFn: () => getCollectibleBalance(args),
    retry: true,
    staleTime: 5 * time.oneMinute,
    enabled: !!args.chainId && !!args.accountAddress && !!args.collectionAddress && !!args.tokenId
  }))

export const useCollectiblePrices = (args: GetCollectiblePricesArgs) => (
  useQuery({
    queryKey: ['useCollectiblePrices', args],
    queryFn: () => getCollectiblePrices(args),
    retry: true,
    staleTime: 5 * time.oneMinute,
    enabled: args.tokens.length > 0 
  }))

export const useTransactionHistory = (
  arg: Omit<GetTransactionHistoryArgs, 'page'> & { disabled?: boolean }
) =>
  useInfiniteQuery({
    queryKey: ['transactionHistory', arg],
    queryFn: ({ pageParam }: { pageParam?: number }) => {
      return getTransactionHistory({
        ...(arg as Omit<GetTransactionHistoryArgs, 'page'> ),
        ...(pageParam ? { page: { page: pageParam } }: { page: { page: 1 } }),
      })
    },
    getNextPageParam: ({ page }) => {
      // Note: must return undefined instead of null to stop the infinite scroll
      if (!page.more) return undefined

      return (page?.page || 1)
    },
    retry: true,
    staleTime: 10 * time.oneMinute,
    enabled: !!arg.chainId && !arg.disabled && !!arg.accountAddress
  })

export const useConversionRate = (args: FetchFiatConversionRateArgs) => (
  useQuery({
    queryKey: ['useConversionRate', args],
    queryFn: () => fetchFiatConversionRate(args),
    retry: true,
    staleTime: 60 * time.oneMinute,
  }))