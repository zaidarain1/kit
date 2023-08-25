import React, { useState } from 'react'
import { ethers } from 'ethers'
import { Box, SearchIcon, Text, TextInput } from '@0xsequence/design-system'
import { getNativeTokenInfoByChainId } from '@0xsequence/kit-core'
import Fuse from 'fuse.js'
import { useAccount, useChainId } from 'wagmi'

import { BalanceItem } from './components/BalanceItem'
import { WalletLink } from './components/WalletLink'

import { Skeleton } from '../../shared/Skeleton'
import { useBalances, useCoinPrices } from '../../hooks'
import { compareAddress, computeBalanceFiat } from '../../utils'

export const SearchWallet = () => {
  const [search, setSearch] = useState('')
  const { address: accountAddress } = useAccount()
  const chainId = useChainId()
  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)

  const { data: tokenBalancesData, isLoading: tokenBalancesIsLoading } = useBalances({
    accountAddress: accountAddress || '',
    chainId
  })

  const coinBalancesUnordered = tokenBalancesData?.filter(b => b.contractType === 'ERC20' || compareAddress(b.contractAddress, ethers.constants.AddressZero)) || []

  const {
    data: coinPrices = [],
    isLoading: isLoadingCoinPrices
  } = useCoinPrices({
    tokens: coinBalancesUnordered.map(token => ({
      chainId: token.chainId,
      contractAddress: token.contractAddress
    }))
  });

  const coinBalances = coinBalancesUnordered.sort((a, b) => {
    const isHigherFiat = Number(computeBalanceFiat(b, coinPrices)) - Number(computeBalanceFiat(a, coinPrices))
    return isHigherFiat
  })

  const collectionBalancesUnordered = tokenBalancesData?.filter(b => b.contractType === 'ERC721' || b.contractType === 'ERC1155') || []
  const collectionBalances = collectionBalancesUnordered.sort((a, b) => {
    return Number(b.balance) - Number(a.balance)
  })

  const isLoading = tokenBalancesIsLoading || isLoadingCoinPrices

  interface IndexedData {
    index: number,
    name: string,
  }
  const indexedCollectionBalances: IndexedData[] = collectionBalances.map((balance, index) => {
    return {
      index,
      name: balance.contractInfo?.name || 'Unknown'
    }
  })

  const indexedCoinBalances: IndexedData[] = coinBalances.map((balance, index) => {
    if (compareAddress(balance.contractAddress, ethers.constants.AddressZero)) {
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

  const coinBalancesAmount = coinBalances.length
  const collectionBalancesAmount = collectionBalances.length

  const fuzzySearchCoinBalances = new Fuse(indexedCoinBalances, {
    keys: ['name'],
  })

  const fuzzySearchCollections = new Fuse(indexedCollectionBalances, {
    keys: ['name']
  })

  const foundCoinBalances = (search === '' ? indexedCoinBalances : fuzzySearchCoinBalances.search(search).map(result => result.item)).slice(0, 5)
  const foundCollectionBalances = (search === '' ? indexedCollectionBalances : fuzzySearchCollections.search(search).map(result => result.item)).slice(0, 5)

  return (
    <Box
      padding="5"
      paddingTop="3"
      flexDirection="column"
      gap="10"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="full">
        <TextInput
          autoFocus
          name="search wallet"
          leftIcon={SearchIcon}
          value={search}
          onChange={ev => setSearch(ev.target.value)}
          placeholder="Search your wallet"
        />
      </Box>
      <Box
        width="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="5" 
      >
        <WalletLink
          toLocation={{
            location: 'search-view-all',
            params: {
              defaultTab: 'collections'
            }
          }}
          label={`Collections (${collectionBalancesAmount})`}
        />
        {isLoading ?
          Array(5).fill(null).map((_, i) => (
            <Skeleton key={i} width="100%" height="32px" />
          ))
        : (
          foundCollectionBalances.length === 0 ? (
            <Text>No collections found</Text>
          ) : (
            foundCollectionBalances.map((indexedItem) => {
              const balance = collectionBalances[indexedItem.index]
              return (
                <BalanceItem key={balance.contractAddress} balance={balance} />
              )
            })
          ))
        }
      </Box>
      <Box
        width="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="5" 
      >
        <WalletLink
          toLocation={{
            location: 'search-view-all',
            params: {
              defaultTab: 'coins'
            }
          }}
          label={`Coins (${coinBalancesAmount})`}
        />
        {(isLoading) ?
          Array(5).fill(null).map((_, i) => (
            <Skeleton key={i} width="100%" height="32px" />
          ))
        : (
          foundCoinBalances.length === 0 ? (
            <Text>No coins found</Text>
          ) : (
            foundCoinBalances.map((indexItem) => {
              const balance = coinBalances[indexItem.index]
              return (
                <BalanceItem key={balance.contractAddress} balance={balance} />
              )
            })
          ))
        }
      </Box>
    </Box>
  )
}