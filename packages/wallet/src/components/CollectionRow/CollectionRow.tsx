import React from 'react'
import { Box, Card, Image, Text } from '@0xsequence/design-system'
import { useAccount, useNetwork } from 'wagmi'

import { CollectionHeader } from './CollectionHeader'
import { DefaultIcon } from '../DefaultIcon'
import { useBalances, useCollectionBalance, useNavigation } from '../../hooks'

import * as styles from './styles.css'

export interface CollectionRowProps {
  collectionAddress: string
  showAll?: boolean
}

export const CollectionRow = ({ collectionAddress, showAll = false }: CollectionRowProps) => {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const { setNavigation } = useNavigation()
  const { data: collectionBalanceData, isLoading: isLoadingCollectionBalance } = useCollectionBalance({
    chainId,
    accountAddress: address || '',
    collectionAddress,
  })

  const collectiblesAmountToDisplay = showAll ? collectionBalanceData?.length : 4 || 0

  const contractInfo = collectionBalanceData?.[0]?.contractInfo

  const getCollectionHeader = () => {
    if (showAll && contractInfo) {

      return (
        <CollectionHeader
          isLoading={isLoadingCollectionBalance}
          type={contractInfo.type}
          image={contractInfo.extensions.ogImage}
          description={contractInfo.extensions.description}
          logo={contractInfo.logoURI}
          name={contractInfo.name}
          address={contractInfo.address}
        />
      )
    }
    return null
  }


  return (
    <>
    <Box marginBottom="4">
      {getCollectionHeader()}
    </Box>
    <Box className={styles.collectibleGrid}>
      {collectionBalanceData?.slice(0, collectiblesAmountToDisplay).map((balance) => {
        return (
          <Box flexDirection="column" alignItems="flex-start" justifyContent="center">
            <Card padding="0" aspectRatio="1/1" justifyContent="center" alignItems="center" overflow="hidden" borderRadius="md" background="backgroundSecondary">
              <Image style={{ height: '100%' }} src={balance.tokenMetadata?.image} />
            </Card>
            <Text marginTop="1" marginLeft="2" variant="small">{balance.tokenMetadata?.name} {`#${balance.tokenID}`}</Text>
          </Box>
        )
      })}
    </Box>
    </>
  )
}

