import React from 'react'
import { TokenBalance } from '@0xsequence/indexer'
import { ethers } from 'ethers'
import { Box, Image, Text, vars } from '@0xsequence/design-system'
import { useAccount } from 'wagmi'

import { NetworkBadge } from '../../shared/NetworkBadge'
import { DefaultIcon } from '../../shared/DefaultIcon'
import { useCollectionBalance, useNavigation } from '../../hooks'
import { formatDisplay } from '../../utils'

import * as sharedStyles from '../../shared/styles.css'

interface CollectionDetailsProps {
  chainId: number
  contractAddress: string
}

export const CollectionDetails = ({
  chainId,
  contractAddress
}: CollectionDetailsProps) => {
  const { setNavigation } = useNavigation()
  const { address: accountAddress } = useAccount() 
  const { data: collectionBalanceData, isLoading: isLoadingCollectionBalance } = useCollectionBalance({
    chainId,
    accountAddress: accountAddress || '',
    collectionAddress: contractAddress,
  })

  const contractInfo = collectionBalanceData?.[0]?.contractInfo
  const collectionLogoURI = contractInfo?.logoURI

  if (isLoadingCollectionBalance) {
    return <Box>
      loading
    </Box>
  }

  const onClickItem = (balance: TokenBalance) => {
    setNavigation && setNavigation({
      location: 'collectible-details',
      params: {
        contractAddress: balance.contractAddress,
        chainId: balance.chainId,
        tokenId: balance.tokenID,
      }
    })
  }

  return (
    <Box
      padding="5"
      paddingTop="3"
      marginTop="8"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="10"
    >
      <Box
        flexDirection="column"
        gap="2"
        justifyContent="center"
        alignItems="center"
      >
        {collectionLogoURI ? (
          <Image style={{ width: '32px', height: '32px' }} src={collectionLogoURI} alt="collection logo" />
        ) : (
          <DefaultIcon size={32} />
        )}
        <Text fontWeight="bold" fontSize="large" color="text100">{contractInfo?.name || 'Unknown'}</Text>
        <NetworkBadge chainId={chainId} />
        <Text fontWeight="medium" fontSize="normal" color="text50">{`${collectionBalanceData?.length || 0} Unique Collectibles`}</Text>
      </Box>
      <Box width="full">
        <Text
          fontWeight="medium"
          fontSize="normal"
          color="text50"
        >
          {`Owned (${collectionBalanceData?.length || 0})`}
        </Text>
        <Box
          flexDirection="row"
          gap="2"
          flexWrap="wrap"
          width="full"
          marginTop="3"
          
        >
          {collectionBalanceData?.map((balance) => {
            const unformattedBalance = balance.balance
            const decimals = balance?.tokenMetadata?.decimals || 0 
            const formattedBalance = formatDisplay(
              ethers.utils.formatUnits(unformattedBalance, decimals)
            )

            return (
              <Box
                key={`${balance.contractAddress}-${balance.tokenID}`}
                style={{
                  width: `calc(50% - ${vars.space[2]})`
                }}
                onClick={() => onClickItem(balance)}
                className={sharedStyles.clickable}
              >
                <Box
                  background="backgroundSecondary"
                  aspectRatio='1/1'
                  width="full"
                  borderRadius="md"
                  justifyContent="center"
                  alignItems="center"
                  marginBottom="2"
                >
                  <Image style={{ height: '100%' }} src={balance.tokenMetadata?.image} />
                </Box>
                <Box>
                  <Text
                    fontWeight="bold"
                    fontSize="normal"
                    color="text100"
                  >
                    {`${balance.tokenMetadata?.name}`}
                  </Text>
                </Box>
                <Box>
                  <Text
                    marginTop="1"
                    fontWeight="medium"
                    fontSize="normal"
                    color="text50"
                  >
                    {formattedBalance} Owned
                  </Text>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}