import { Box, SearchIcon, Skeleton, TabsContent, TabsHeader, TabsRoot, Text, TextInput } from '@0xsequence/design-system'
import {
  getNativeTokenInfoByChainId,
  useExchangeRate,
  useCoinPrices,
  useBalances,
  ContractVerificationStatus
} from '@0xsequence/kit'
import { ethers } from 'ethers'
import Fuse from 'fuse.js'
import React, { useState, useEffect } from 'react'
import { useAccount, useConfig } from 'wagmi'

import { useSettings } from '../../hooks'
import { compareAddress, computeBalanceFiat } from '../../utils'

import { BalanceItem } from './components/BalanceItem'

interface SearchWalletViewAllProps {
  defaultTab: 'coins' | 'collections'
}

export const SearchWalletViewAll = ({ defaultTab }: SearchWalletViewAllProps) => {
  const { chains } = useConfig()
  const { fiatCurrency, hideUnlistedTokens, selectedNetworks } = useSettings()
  const [search, setSearch] = useState('')
  const [selectedTab, setSelectedTab] = useState(defaultTab)

  useEffect(() => {
    setSearch('')
  }, [selectedTab])

  const { address: accountAddress } = useAccount()

  const { data: tokenBalancesData, isPending: isPendingTokenBalances } = useBalances({
    chainIds: selectedNetworks,
    filter: {
      accountAddresses: accountAddress ? [accountAddress] : [],
      contractStatus: hideUnlistedTokens ? ContractVerificationStatus.VERIFIED : ContractVerificationStatus.ALL,
      contractWhitelist: [],
      contractBlacklist: []
    }
  })

  const coinBalancesUnordered =
    tokenBalancesData?.filter(b => b.contractType === 'ERC20' || compareAddress(b.contractAddress, ethers.ZeroAddress)) || []

  const { data: coinPrices = [], isPending: isPendingCoinPrices } = useCoinPrices(
    coinBalancesUnordered.map(token => ({
      chainId: token.chainId,
      contractAddress: token.contractAddress
    }))
  )

  const { data: conversionRate = 1, isPending: isPendingConversionRate } = useExchangeRate(fiatCurrency.symbol)

  const coinBalances = coinBalancesUnordered.sort((a, b) => {
    const isHigherFiat =
      Number(
        computeBalanceFiat({
          balance: b,
          prices: coinPrices,
          conversionRate,
          decimals: b.contractInfo?.decimals || 18
        })
      ) -
      Number(
        computeBalanceFiat({
          balance: a,
          prices: coinPrices,
          conversionRate,
          decimals: a.contractInfo?.decimals || 18
        })
      )
    return isHigherFiat
  })

  const collectionBalancesUnordered =
    tokenBalancesData?.filter(b => b.contractType === 'ERC721' || b.contractType === 'ERC1155') || []
  const collectionBalances = collectionBalancesUnordered.sort((a, b) => {
    return Number(b.balance) - Number(a.balance)
  })

  const coinBalancesAmount = coinBalances.length
  const collectionBalancesAmount = collectionBalances.length

  const isPending = isPendingTokenBalances || isPendingCoinPrices || isPendingConversionRate
  interface IndexedData {
    index: number
    name: string
  }
  const indexedCollectionBalances: IndexedData[] = collectionBalances.map((balance, index) => {
    return {
      index,
      name: balance.contractInfo?.name || 'Unknown'
    }
  })

  const indexedCoinBalances: IndexedData[] = coinBalances.map((balance, index) => {
    if (compareAddress(balance.contractAddress, ethers.ZeroAddress)) {
      const nativeTokenInfo = getNativeTokenInfoByChainId(balance.chainId, chains)

      return {
        index,
        name: nativeTokenInfo.name
      }
    } else {
      return {
        index,
        name: balance.contractInfo?.name || 'Unknown'
      }
    }
  })

  const fuzzySearchCoinBalances = new Fuse(indexedCoinBalances, {
    keys: ['name']
  })

  const fuzzySearchCollections = new Fuse(indexedCollectionBalances, {
    keys: ['name']
  })

  const foundCoinBalances =
    search === '' ? indexedCoinBalances : fuzzySearchCoinBalances.search(search).map(result => result.item)
  const foundCollectionBalances =
    search === '' ? indexedCollectionBalances : fuzzySearchCollections.search(search).map(result => result.item)

  const TabsHeaderSkeleton = () => {
    return <Skeleton style={{ width: '360px', height: '48px' }} />
  }

  const ItemsSkeletons = () => {
    return (
      <>
        {Array(8)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} width="full" height="8" />
          ))}
      </>
    )
  }

  return (
    <Box paddingX="4" paddingBottom="5" paddingTop="3" flexDirection="column" gap="5" alignItems="center" justifyContent="center">
      <Box width="full">
        <TextInput
          autoFocus
          name="search wallet"
          leftIcon={SearchIcon}
          value={search}
          onChange={ev => setSearch(ev.target.value)}
          placeholder="Search your wallet"
          data-1p-ignore
        />
      </Box>

      <Box width="full">
        <TabsRoot value={selectedTab} onValueChange={value => setSelectedTab(value as 'coins' | 'collections')}>
          <Box marginBottom="5">
            {!isPending && (
              <TabsHeader
                value={selectedTab}
                tabs={[
                  { label: `Collections (${collectionBalancesAmount})`, value: 'collections' },
                  { label: `Coins (${coinBalancesAmount})`, value: 'coins' }
                ]}
              />
            )}
            {isPending && <TabsHeaderSkeleton />}
          </Box>

          <TabsContent value="collections">
            <Box flexDirection="column" gap="3">
              {isPending && <ItemsSkeletons />}
              {!isPending && foundCollectionBalances.length === 0 && <Text color="text100">No Collectibles Found</Text>}
              {!isPending &&
                foundCollectionBalances.length > 0 &&
                foundCollectionBalances.map((indexItem, index) => {
                  const collectionBalance = collectionBalances[indexItem.index]
                  return <BalanceItem key={index} balance={collectionBalance} />
                })}
            </Box>
          </TabsContent>

          <TabsContent value="coins">
            <Box flexDirection="column" gap="3">
              {isPending && <ItemsSkeletons />}
              {!isPending && coinBalances.length == 0 && <Text color="text100">No Coins Found</Text>}
              {!isPending &&
                foundCoinBalances.length > 0 &&
                foundCoinBalances.map((indexedItem, index) => {
                  const coinBalance = coinBalances[indexedItem.index]
                  return <BalanceItem key={index} balance={coinBalance} />
                })}
            </Box>
          </TabsContent>
        </TabsRoot>
      </Box>
    </Box>
  )
}
