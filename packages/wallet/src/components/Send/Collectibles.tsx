import { Box, Button, Image, Text, ChevronRightIcon } from '@0xsequence/design-system'
import React, { useEffect } from "react"
import { useAccount, useNetwork } from 'wagmi'

import { CollectionSelector } from './CollectionSelector'
import { DefaultIcon } from '../DefaultIcon'
import { Loader } from '../Loader'

import {
  useSendCollectibles,
  useNavigation,
  useBalances
} from '../../hooks'
import { formatAddress } from '../../utils'

import * as styles from './styles.css'

export const SendCollectibles = () => {
  const { setCollection, resetAll } = useSendCollectibles()

  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const { setNavigation } = useNavigation()

  const { data: balances, isLoading: isLoadingBalances } = useBalances({ accountAddress: address || '', chainId })

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

  const getImage = (logoURI?: string) => {
    if (logoURI) {
      return (
        <Image src={logoURI} borderRadius="circle" style={{ width: '30px' }} />
      )
    }

    return <DefaultIcon size={30} />
  }


  const isLoading = isLoadingBalances

  if (isLoading) {
    return (
      <Box marginTop="16">
        <Loader />
      </Box>
    )
  }

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

  return (
    <div>
      <h1>Collectibles</h1>
    </div>
  )
}