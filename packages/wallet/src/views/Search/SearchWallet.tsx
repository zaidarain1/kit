import React, { useState } from 'react'
import { ethers } from 'ethers'
import { Box, SearchIcon, Text, TextInput } from '@0xsequence/design-system'
import { BalanceItem } from './components/BalanceItem'
import { WalletLink } from './components/WalletLink'
import { useAccount, useChainId } from 'wagmi'

import { Skeleton } from '../../shared/Skeleton'
import { useBalances } from '../../hooks'
import { compareAddress } from '../../utils'

export const SearchWallet = () => {
  const [search, setSearch] = useState('')
  const { address: accountAddress } = useAccount()
  const chainId = useChainId()

  const { data: tokenBalancesData, isLoading: tokenBalancesIsLoading } = useBalances({
    accountAddress: accountAddress || '',
    chainId
  })

  const coinBalances = tokenBalancesData?.filter(b => b.contractType === 'ERC20' || compareAddress(b.contractAddress, ethers.constants.AddressZero)).slice(0, 5) || []
  const tokenBalances = tokenBalancesData?.filter(b => b.contractType === 'ERC721' || b.contractType === 'ERC1155').slice(0, 5) || []

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
              defaultTab: 'collectibles'
            }
          }}
          label="Collectibles"
        />
        {tokenBalancesIsLoading ?
          Array(5).fill(null).map((_, i) => (
            <Skeleton width="full" height="32px" />
          ))
        : (
          tokenBalances.length === 0 ? (
            <Text>No collectibles found</Text>
          ) : (
            tokenBalances.map((tokenBalance) => (
              <BalanceItem tokenBalance={tokenBalance} />
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
          label="Coins"
        />
        {tokenBalancesIsLoading ?
          Array(5).fill(null).map((_, i) => (
            <Skeleton width="full" height="32px" />
          ))
        : (
          coinBalances.length === 0 ? (
            <Text>No coins found</Text>
          ) : (
            coinBalances.map((tokenBalance) => (
              <BalanceItem tokenBalance={tokenBalance} />
            ))
          ))
        }
      </Box>
    </Box>
  )
}