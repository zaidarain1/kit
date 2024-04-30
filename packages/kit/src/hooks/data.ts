import { Token } from '@0xsequence/api'
import { useQuery } from '@tanstack/react-query'

import { useMetadataClient } from './useMetadataClient'
import { useAPIClient } from './useAPIClient'
import { useIndexerClient } from './useIndexerClient'

export const time = {
  oneSecond: 1 * 1000,
  oneMinute: 60 * 1000,
  oneHour: 60 * 60 * 1000
}

interface UseCollectionBalanceArgs {
  chainId: number
  accountAddress: string
  contractAddress: string
  includeMetadata?: boolean
  verifiedOnly?: boolean
}

export const useCollectionBalance = (args: UseCollectionBalanceArgs) => {
  const indexerClient = useIndexerClient(args.chainId)

  return useQuery({
    queryKey: ['collectionBalance', args],
    queryFn: async () => {
      const res = await indexerClient.getTokenBalances({
        accountAddress: args.accountAddress,
        contractAddress: args.contractAddress,
        includeMetadata: args.includeMetadata ?? true,
        metadataOptions: {
          verifiedOnly: args.verifiedOnly ?? true
        }
      })

      return res?.balances || []
    },
    retry: true,
    staleTime: time.oneSecond * 30,
    enabled: !!args.chainId && !!args.accountAddress && !!args.contractAddress
  })
}

// From USD to another currency
export const useExchangeRate = (toCurrency: string) => {
  const apiClient = useAPIClient()

  return useQuery({
    queryKey: ['exchangeRate', toCurrency],
    queryFn: async () => {
      if (toCurrency === 'USD') {
        return 1
      }

      const res = await apiClient.getExchangeRate({ toCurrency })

      return res.exchangeRate.value
    },
    retry: true,
    staleTime: time.oneMinute * 10
  })
}

// const getCoinPrices = async (apiClient: SequenceAPIClient, tokens: Token[]) => {
//   if (args.tokens.length === 0) {
//     return []
//   }

//   const res = await apiClient.getCoinPrices(args)

//   return res?.tokenPrices || []
// }

export const useCoinPrices = (tokens: Token[]) => {
  const apiClient = useAPIClient()

  return useQuery({
    queryKey: ['coinPrices', tokens],
    queryFn: async () => {
      if (tokens.length === 0) {
        return []
      }

      const res = await apiClient.getCoinPrices({ tokens })

      return res?.tokenPrices || []
    },
    retry: true,
    staleTime: time.oneMinute,
    enabled: tokens.length > 0
  })
}

export const useTokenMetadata = (chainId: number, contractAddress: string, tokenIds: string[]) => {
  const metadataClient = useMetadataClient()

  return useQuery({
    queryKey: ['tokenMetadata', chainId, contractAddress, tokenIds],
    queryFn: async () => {
      const res = await metadataClient.getTokenMetadata({
        chainID: String(chainId),
        contractAddress,
        tokenIDs: tokenIds
      })

      return res.tokenMetadata
    },
    retry: true,
    staleTime: time.oneMinute * 10,
    enabled: !!chainId && !!contractAddress
  })
}

export const useContractInfo = (chainId: number, contractAddress: string) => {
  const metadataClient = useMetadataClient()

  return useQuery({
    queryKey: ['contractInfo', chainId, contractAddress],
    queryFn: async () => {
      const res = await metadataClient.getContractInfo({
        chainID: String(chainId),
        contractAddress
      })

      return res.contractInfo
    },
    retry: true,
    staleTime: time.oneMinute * 10,
    enabled: !!chainId && !!contractAddress
  })
}
