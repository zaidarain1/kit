import { useQuery } from '@tanstack/react-query'
import { GetContractInfoArgs } from '@0xsequence/metadata'
import {
  fetchBalances,
  GetTokenBalancesArgs,
  fetchCollectionBalance,
  GetCollectionBalanceArgs,
  getCoinPrices,
  GetCoinPricesArgs,
  fetchTokenMetadata,
  GetTokenMetadataArgs,
  fetchContractInfo,
} from '../api/data'

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

export const useCoinPrices = (args: GetCoinPricesArgs) =>
  useQuery({
    queryKey: ['coinPrices', args],
    queryFn: () => getCoinPrices(args),
    retry: true,
    staleTime: 1 * time.oneMinute,
    enabled: args.tokens.length > 0
  })
  
export const useTokenMetadata = (args: GetTokenMetadataArgs) =>
  useQuery({
    queryKey: ['useTokenMetadata', args],
    queryFn: () => fetchTokenMetadata(args),
    retry: true,
    staleTime: 10 * time.oneMinute,
    enabled: !!args.chainId && !!args.contractAddress
  })

export const useContractInfo = (args: GetContractInfoArgs) =>
  useQuery({
    queryKey: ['useContractInfo', args],
    queryFn: () => fetchContractInfo(args),
    retry: true,
    staleTime: 60 * time.oneMinute,
    enabled: !!args.chainID && !!args.contractAddress
  })