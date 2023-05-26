import { ethers } from 'ethers'
import { Box, Button, Image, Text, ChevronRightIcon } from '@0xsequence/design-system'
import React, { useEffect } from "react"
import { useAccount, useNetwork } from 'wagmi'


import { CollectibleSelector } from './CollectibleSelector'
import { CollectionSelector } from './CollectionSelector'

import { Loader } from '../Loader'

import {
  useSendCollectibles,
  useNavigation,
  useBalances,
  useCollectionBalance,
} from '../../hooks'
import { formatAddress, formatDisplay } from '../../utils'

import * as styles from './styles.css'

export const SendCollectibles = () => {
  const { collection, setCollection, resetAll } = useSendCollectibles()

  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const { setNavigation } = useNavigation()

  const { data: balances, isLoading: isLoadingBalances } = useBalances({ accountAddress: address || '', chainId })
  const { data: collectionBalanceData, isLoading: isLoadingCollectionBalance } = useCollectionBalance({ accountAddress: address || '', chainId, collectionAddress: collection?.collectionAddress || '' })

  const collections = balances?.filter(b => b.contractType === 'ERC721' || b.contractType === 'ERC1155')

  useEffect(() => {
    return(() => {
      resetAll()
    })
  }, [])

  const onClickCollection = (contractAddress: string, chainId: number) => {
    setCollection({
      collectionAddress: contractAddress,
      chainId
    })
  }

  const isLoading = (!collection && isLoadingBalances) || (collection && isLoadingCollectionBalance)

  if (isLoading) {
    return (
      <Box marginTop="16">
        <Loader />
      </Box>
    )
  }

  if (!collection) {
    return (
      <Box>
        <Box cursor="pointer" marginBottom="1">
          <Text variant="normal">Select a collection</Text>
        </Box>
        <Box width="full" flexDirection="column" gap="2">
          {collections?.length === 0 ? (
            <Box>
              No Collections Found
            </Box>
          ) : (
            <>
              {collections?.map(c => {
                return (
                  <Box
                    key={c.contractAddress}
                    flexDirection="column"
                    borderRadius="md"
                    cursor="pointer"
                    style={{ userSelect: 'none' }}
                    className={styles.clickableRowItem}
                    onClick={() => onClickCollection(c.contractAddress, c.chainId)}
                  >
                    <CollectionSelector
                      name={c.contractInfo?.name || formatAddress(c.contractAddress)}
                      imageUrl={c.contractInfo?.logoURI}
                      quantity={c.balance}
                    />
                  </Box>
                )
              })}
            </>
          )}
        </Box>
      </Box>
    )
  }

  return (
    <>
      <Box cursor="pointer" marginBottom="1">
        <Text variant="normal">Select collectibles</Text>
      </Box>
      <Box
        gap="2"
        flexDirection="column"
      >
        {collectionBalanceData?.map((c) => {
          const unformattedBalance = c.balance
          const decimals = c.tokenMetadata?.decimals || 0 
          const formattedBalance = formatDisplay(
            ethers.utils.formatUnits(unformattedBalance, decimals)
          )
    
          return (
            <Box
              key={`${c.contractAddress}-${c.tokenID}`}
              cursor="pointer"
              className={styles.clickableRowItem}
              style={{ userSelect: 'none' }}
            >
              <CollectibleSelector
                imageUrl={c.tokenMetadata?.image}
                quantity={formattedBalance}
                name={c.tokenMetadata?.name}
                tokenId={c.tokenID}
                isSelected={true}
              />
            </Box>
          )
        })}
      </Box>
    </>
  )
}