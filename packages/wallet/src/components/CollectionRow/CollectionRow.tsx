import React from 'react'
import { ArrowRightIcon, Box, Button, Card, Image, Text } from '@0xsequence/design-system'
import { useAccount, useNetwork } from 'wagmi'

import { DefaultIcon } from '../DefaultIcon'
import { useBalances, useCollectionBalance, useNavigation } from '../../hooks'

import * as styles from './styles.css'

export interface CollectionRowProps {
  collectionAddress: string
  total: number
}

export const CollectionRow = ({ collectionAddress, total }: CollectionRowProps) => {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const { setNavigation } = useNavigation()
  const { data: collectionBalanceData, isLoading: isLoadingCollectionBalance } = useCollectionBalance({
    chainId,
    accountAddress: address || '',
    collectionAddress,
  })

  return (
    <Box className={styles.collectibleGrid}>
      {collectionBalanceData?.slice(0, 3).map((balance) => {
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
  )
}

