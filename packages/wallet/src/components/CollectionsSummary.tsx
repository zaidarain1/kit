import React from 'react'
import { Skeleton } from './Skeleton'
import { ArrowRightIcon, Box, Button, Image, Text } from '@0xsequence/design-system'
import { useAccount, useNetwork } from 'wagmi'

import { CollectionRow } from './CollectionRow'
import { DefaultIcon } from './DefaultIcon'
import { useBalances, useCollectionBalance, useNavigation } from '../hooks'

export const CollectionsSummary = () => {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const { setNavigation } = useNavigation()

  const { data: balances, isLoading } = useBalances({ accountAddress: address || '', chainId })

  const collections = balances?.filter(b => b.contractType === 'ERC721' || b.contractType === 'ERC1155')
  const totalCollections = collections?.length || 0

  const onClickViewAllCollections = () => {
    setNavigation && setNavigation({
      location: 'all-collections'
    })
  }

  const getCollectionRowSkeleton = () => {
    return (
      <Box gap="2" flexDirection="column" style={{ height: '290px' }}>
        <Skeleton width={240} height={30} />
        <Box gap="2">
          <Box gap="2" flexDirection="column">
            <Skeleton width={216} height={216} />
            <Skeleton width={100} height={16} />
          </Box>
          <Box gap="2" flexDirection="column">
            <Skeleton width={216} height={216} />
            <Skeleton width={100} height={16} />
          </Box>
          <Box gap="2" flexDirection="column">
            <Skeleton width={216} height={216} />
            <Skeleton width={100} height={16} />
          </Box>
        </Box>
      </Box>
    )
  }

  if (isLoading) {
    return (
      <Box gap="2" flexDirection="column">
        {getCollectionRowSkeleton()}
        {getCollectionRowSkeleton()}
        <Button onClick={onClickViewAllCollections} variant="emphasis" label={`View All Collections`} rightIcon={ArrowRightIcon} />
      </Box>
    )
  }

  const getImage = (logoURI?: string) => {
    if (logoURI) {
      return (
        <Image src={logoURI} borderRadius="circle" style={{ width: '30px' }} />
      )
    }

    return <DefaultIcon size={30} />
  }

  const onClickCollection = (collectionAddress: string) => {
    setNavigation && setNavigation({
      location: 'all-collectibles',
      params: {
        collectionAddress
      }
    })  
  }

  return (
    <Box>
      <Box marginBottom="1">
        <Text variant="small" color="text50">{`Collections (${totalCollections})`}</Text>
      </Box>
      <Box width="full" flexDirection="column" gap="2">
        {collections?.length === 0 ? (
          <Box>
            No Collections Found
          </Box>
        ) : (
          <>
            {collections?.map(c => (
              <Box key={c.contractAddress} flexDirection="column" borderRadius="md" paddingY="2" paddingX="3">
                <Box cursor="pointer" onClick={() => onClickCollection(c.contractAddress)} justifyContent="space-between" alignItems="center" gap="2" marginBottom="2">
                  <Box alignItems="center" gap="2">
                    {getImage(c.contractInfo?.logoURI)}
                    <Text variant="medium">
                      {c.contractInfo?.name || c.contractAddress}
                    </Text>
                  </Box>
                  <Box color="text50" alignItems="center" gap="2">
                    <Text variant="medium">{c.balance}</Text>
                    <ArrowRightIcon style={{ position: 'relative', top: '-2px' }} />
                  </Box>
                </Box>

                <Box>
                  <CollectionRow total={Number(c.balance)} collectionAddress={c.contractAddress} />
                </Box>
              </Box>
            ))}
            <Button onClick={onClickViewAllCollections} variant="emphasis" label={`View All Collections`} rightIcon={ArrowRightIcon} />
          </>
        )}
      </Box>
    </Box>
  )
} 