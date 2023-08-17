import React, { useState } from 'react'
import { ethers } from 'ethers'
import {
  Box,
  SearchIcon,
  TabsContent,
  TabsHeader,
  TabsRoot,
  Text,
  TextInput,
} from '@0xsequence/design-system'
import { BalanceItem } from './components/BalanceItem'
import { useAccount, useChainId } from 'wagmi'

import { Skeleton } from '../../shared/Skeleton'
import { useBalances, useCoinPrices } from '../../hooks'
import { compareAddress, computeBalanceFiat } from '../../utils'

interface SearchWalletViewAllProps {
  defaultTab: 'coins' | 'collections'
}

export const SearchWalletViewAll = ({
  defaultTab
}: SearchWalletViewAllProps) => {
  const [search, setSearch] = useState('')
  const [selectedTab, setSelectedTab] = useState(defaultTab)

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

  const coinBalancesAmount = coinBalances.length
  const collectionBalancesAmount = collectionBalances.length

  const isLoading = tokenBalancesIsLoading || isLoadingCoinPrices


  const TabsHeaderSkeleton = () => {
      return (
        <Skeleton width="360px" height="48px" />
      )
  }

  const ItemsSkeletons = () => {
    return (
      <>
        {Array(8).fill(null).map(() => (
          <Skeleton width="full" height="32px" />
        ))}
      </>
    )
  }

  return (
    <Box
      padding="5"
      paddingTop="3"
      flexDirection="column"
      gap="5"
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

      <Box width="full">
        <TabsRoot value={selectedTab} onValueChange={value => setSelectedTab(value as 'coins' | 'collections')}>
          <Box marginBottom="5">
            {!isLoading && (
              <TabsHeader
                value={selectedTab}
                tabs={[
                  { label: `Collections (${collectionBalancesAmount})`, value: 'collections' },
                  { label: `Coins (${coinBalancesAmount})`, value: 'coins' }
                ]}
              />
            )}
            {isLoading && (
              <TabsHeaderSkeleton />
            )}
          </Box>

          <TabsContent value="collections">
            <Box flexDirection="column" gap="3">
              {isLoading && (
                <ItemsSkeletons />
              )}
              {!isLoading && collectionBalances.length === 0 && (
                <Text>No Collectibles Found</Text>
              )}
              {!isLoading && collectionBalances.length > 0 && (
                collectionBalances.map((collectionBalance) => (
                  <BalanceItem balance={collectionBalance} />
                ))
              )}
            </Box>
          </TabsContent>

          <TabsContent value="coins">
            <Box flexDirection="column" gap="3">
              {isLoading && (
                <ItemsSkeletons />
              )}
              {!isLoading && coinBalances.length == 0 && (
                <Text>No Coins Found</Text>
              )}
              {!isLoading && coinBalances.length > 0 && (
                coinBalances.map((coinBalance) => (
                  <BalanceItem balance={coinBalance} />
                ))
              )}
            </Box>
          </TabsContent>
        </TabsRoot>
      </Box>
    </Box>
  )
}