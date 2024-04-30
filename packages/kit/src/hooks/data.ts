import { GetContractInfoArgs, GetTokenMetadataArgs } from '@0xsequence/metadata'
import { GetCoinPricesArgs, GetExchangeRateArgs } from '@0xsequence/api'
import { useQuery } from '@tanstack/react-query'

import { useMetadataClient } from './useMetadataClient'
import { useAPIClient } from './useAPIClient'

export const time = {
  oneSecond: 1 * 1000,
  oneMinute: 60 * 1000,
  oneHour: 60 * 60 * 1000
}

export const useExchangeRate = (args: GetExchangeRateArgs) => {
  const apiClient = useAPIClient()

  return useQuery({
    queryKey: ['exchangeRate', args],
    queryFn: async () => {
      if (args.toCurrency === 'USD') {
        return 1
      }

      const res = await apiClient.getExchangeRate(args)

      return res.exchangeRate.value
    },
    retry: true,
    staleTime: time.oneMinute * 10
  })
}

export const useCoinPrices = (args: GetCoinPricesArgs) => {
  const apiClient = useAPIClient()

  return useQuery({
    queryKey: ['coinPrices', args],
    queryFn: async () => {
      if (args.tokens.length === 0) {
        return []
      }

      const res = await apiClient.getCoinPrices(args)

      return res?.tokenPrices || []
    },
    retry: true,
    staleTime: time.oneMinute,
    enabled: args.tokens.length > 0
  })
}

export const useTokenMetadata = (args: GetTokenMetadataArgs) => {
  const metadataClient = useMetadataClient()

  return useQuery({
    queryKey: ['tokenMetadata', args],
    queryFn: async () => {
      const res = await metadataClient.getTokenMetadata(args)

      return res.tokenMetadata[0]
    },
    retry: true,
    staleTime: time.oneMinute * 10,
    enabled: !!args.chainID && !!args.contractAddress
  })
}

export const useContractInfo = (args: GetContractInfoArgs) => {
  const metadataClient = useMetadataClient()

  return useQuery({
    queryKey: ['contractInfo', args],
    queryFn: async () => {
      const res = await metadataClient.getContractInfo(args)

      return res.contractInfo
    },
    retry: true,
    staleTime: time.oneMinute * 10,
    enabled: !!args.chainID && !!args.contractAddress
  })
}
