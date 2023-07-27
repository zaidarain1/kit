import React from 'react'
import { ethers } from 'ethers'
import { Box, Card, Image, Text } from '@0xsequence/design-system'
import { useAccount, useNetwork } from 'wagmi'

import { CollectionHeader } from './CollectionHeader'

import { Skeleton } from '../../shared/Skeleton'

import { useCollectionBalance } from '../../hooks'
import { formatDisplay } from '../../utils'

import * as styles from './styles.css'

export interface CollectionRowProps {
  collectionAddress: string
  showAll?: boolean
}

export const CollectionRow = ({ collectionAddress, showAll = false }: CollectionRowProps) => {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const { data: collectionBalanceData, isLoading: isLoadingCollectionBalance } = useCollectionBalance({
    chainId,
    accountAddress: address || '',
    collectionAddress,
  })

  const collectiblesAmountToDisplay = showAll ? collectionBalanceData?.length : 4 || 0

  const contractInfo = collectionBalanceData?.[0]?.contractInfo

  const getCollectionHeader = () => {
    if (showAll) {
      return (
        <CollectionHeader
          isLoading={isLoadingCollectionBalance}
          type={contractInfo?.type}
          image={contractInfo?.extensions.ogImage}
          description={contractInfo?.extensions.description}
          logo={contractInfo?.logoURI}
          name={contractInfo?.name}
          address={contractInfo?.address}
        />
      )
    }
    return null
  }

  if (isLoadingCollectionBalance) {
    const getSkeletonCard = () => {
      return (
        <Box gap="2" paddingBottom="4" flexDirection="column" alignItems="flex-start" justifyContent="center">
          <Card padding="0" aspectRatio="1/1" justifyContent="center" alignItems="center" overflow="hidden" borderRadius="md" background="backgroundSecondary">
            <Skeleton />
          </Card>
          <Skeleton width={50} height={16} />
          <Skeleton width={100} height={16} />
        </Box>
      )
    }

    return (
      <>
        <Box marginBottom="4">
          {getCollectionHeader()}
        </Box>
        <Box className={styles.collectibleGrid}>
          {getSkeletonCard()}
          {getSkeletonCard()}
          {getSkeletonCard()}
          {getSkeletonCard()}
        </Box>
      </>
    )
  }

  return (
    <>
    <Box marginBottom="4">
      {getCollectionHeader()}
    </Box>
    <Box className={styles.collectibleGrid}>
      {collectionBalanceData?.slice(0, collectiblesAmountToDisplay).map((balance) => {
        const unformattedBalance = balance.balance
        const decimals = balance.tokenMetadata?.decimals || 0 
        const formattedBalance = formatDisplay(
          ethers.utils.formatUnits(unformattedBalance, decimals)
        )

        return (
          <Box key={`${balance.contractAddress}-${balance.tokenID}`} paddingBottom="4" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <Card padding="0" aspectRatio="1/1" justifyContent="center" alignItems="center" overflow="hidden" borderRadius="md" background="backgroundSecondary">
              <Image style={{ height: '100%' }} src={balance.tokenMetadata?.image} />
            </Card>
            <Text marginTop="1" marginLeft="2" variant="small">{formattedBalance} Owned</Text>
            <Text marginTop="1" marginLeft="2" variant="small">{balance.tokenMetadata?.name} {`#${balance.tokenID}`}</Text>
          </Box>
        )
      })}
    </Box>
    </>
  )
}

