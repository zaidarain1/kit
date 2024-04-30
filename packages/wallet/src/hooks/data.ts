import { ethers } from 'ethers'
import { useQuery } from '@tanstack/react-query'
import {
  GetTokenBalancesArgs,
  fetchBalancesAssetsSummary,
  getNativeToken,
  getTokenBalances,
  getCollectibleBalance,
  GetCollectibleBalanceArgs,
  GetTokenBalancesOptions,
  FetchBalancesAssetsArgs,
  getTransactionHistorySummary,
  GetTransactionHistorySummaryArgs
} from '../api/data'

import { compareAddress } from '../utils/helpers'

export const time = {
  oneSecond: 1 * 1000,
  oneMinute: 60 * 1000,
  oneHour: 60 * 60 * 1000
}

export const useBalancesAssetsSummary = (args: FetchBalancesAssetsArgs, options: GetTokenBalancesOptions) =>
  useQuery({
    queryKey: ['balancesAssetsSummary', args, options],
    queryFn: () => fetchBalancesAssetsSummary(args, options),
    retry: true,
    refetchInterval: time.oneSecond * 4,
    refetchOnMount: true,
    staleTime: time.oneSecond,
    enabled: args.chainIds.length > 0 && !!args.accountAddress
  })

export const useCoinBalance = (args: GetTokenBalancesArgs, options: GetTokenBalancesOptions) =>
  useQuery({
    queryKey: ['coinBalance', args, options],
    queryFn: () => {
      if (compareAddress(args?.contractAddress || '', ethers.constants.AddressZero)) {
        const response = getNativeToken({
          accountAddress: args.accountAddress,
          chainId: args.chainId
        }).then(response => response[0])
        return response
      }
      const response = getTokenBalances(args, options).then(response => response[0])
      return response
    },
    retry: true,
    staleTime: time.oneSecond * 30,
    enabled: !!args.chainId && !!args.accountAddress
  })

export const useCollectibleBalance = (args: GetCollectibleBalanceArgs) =>
  useQuery({
    queryKey: ['collectibleBalance', args],
    queryFn: () => getCollectibleBalance(args),
    retry: true,
    staleTime: time.oneSecond * 30,
    enabled: !!args.chainId && !!args.accountAddress && !!args.collectionAddress && !!args.tokenId
  })

export const useTransactionHistorySummary = (args: GetTransactionHistorySummaryArgs) =>
  useQuery({
    queryKey: ['transactionHistorySummary', args],
    queryFn: () => getTransactionHistorySummary(args),
    retry: true,
    staleTime: time.oneSecond,
    refetchOnMount: true,
    enabled: args.chainIds.length > 0 && !!args.accountAddress
  })
