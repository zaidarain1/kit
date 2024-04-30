import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { TokenBalance } from '@0xsequence/indexer'

import { fetchBalances, GetTokenBalancesArgs } from '../api/data'

export const time = {
  oneSecond: 1 * 1000,
  oneMinute: 60 * 1000,
  oneHour: 60 * 60 * 1000
}

export const useBalances = (args: GetTokenBalancesArgs): UseQueryResult<TokenBalance[]> =>
  useQuery({
    queryKey: ['balances', args],
    queryFn: () => fetchBalances(args),
    retry: true,
    staleTime: 10 * time.oneMinute,
    enabled: !!args.chainId && !!args.accountAddress
  })
