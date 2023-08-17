import React, { useState } from 'react'
import { ethers } from 'ethers'
import { Box, SearchIcon, Text, TextInput } from '@0xsequence/design-system'
import { BalanceItem } from './components/BalanceItem'
import { WalletLink } from './components/WalletLink'
import { useAccount, useChainId } from 'wagmi'

import { Skeleton } from '../../shared/Skeleton'
import { useBalances, useCoinPrices } from '../../hooks'
import { compareAddress, computeBalanceFiat } from '../../utils'

export const SearchWallet = () => {
  const [search, setSearch] = useState('')
  const { address: accountAddress } = useAccount()
  const chainId = useChainId()

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

  const displayedCoinBalances = coinBalances.slice(0, 5)
  const displayedCollectionBalances = collectionBalances.slice(0, 5)

  const coinBalancesAmount = coinBalances.length
  const collectionBalancesAmount = collectionBalances.length

  const isLoading = tokenBalancesIsLoading || isLoadingCoinPrices

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
            <Skeleton width="100%" height="32px" />
          ))
        : (
          displayedCollectionBalances.length === 0 ? (
            <Text>No collections found</Text>
          ) : (
            displayedCollectionBalances.map((collectionBalances) => (
              <BalanceItem balance={collectionBalances} />
            ))
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
            <Skeleton width="100%" height="32px" />
          ))
        : (
          displayedCoinBalances.length === 0 ? (
            <Text>No coins found</Text>
          ) : (
            displayedCoinBalances.map((balance) => (
              <BalanceItem balance={balance} />
            ))
          ))
        }
      </Box>
    </Box>
  )
}