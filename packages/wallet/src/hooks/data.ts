import { useQuery } from '@tanstack/react-query'
import {
  fetchBalancesAssetsSummary,
  GetTokenBalancesOptions,
  FetchBalancesAssetsArgs,
  getTransactionHistorySummary,
  GetTransactionHistorySummaryArgs
} from '../api/data'

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

export const useTransactionHistorySummary = (args: GetTransactionHistorySummaryArgs) =>
  useQuery({
    queryKey: ['transactionHistorySummary', args],
    queryFn: () => getTransactionHistorySummary(args),
    retry: true,
    staleTime: time.oneSecond,
    refetchOnMount: true,
    enabled: args.chainIds.length > 0 && !!args.accountAddress
  })
