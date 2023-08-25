import React from 'react'
import { ethers } from 'ethers'
import { Box, Card, Image, Text } from '@0xsequence/design-system'

import { CoinIcon } from '../../../shared/components/CoinIcon'

import { useTokenMetadata, useContractInfo } from '../../../hooks'
import { getNativeTokenInfoByChainId, formatDisplay } from '../../../utils'

interface OrderSummaryItem {
  contractAddress: string,
  tokenId: string,
  quantityRaw: string,
  chainId: number
}

export const OrderSummaryItem = ({
  contractAddress,
  tokenId,
  quantityRaw,
  chainId,
}: OrderSummaryItem) => {
  const {
    data: tokenMetadata,
    isLoading: isTokenMetadataLoading,
  } = useTokenMetadata({
    chainId,
    contractAddress,
    tokenId,
  })

  const {
    data: contractInfo,
    isLoading: isContractInfoLoading,
  } = useContractInfo({
    chainID: String(chainId),
    contractAddress
  })

  const isLoading = isTokenMetadataLoading || isContractInfoLoading
  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)
  const { name = 'unknown', image, decimals = 0 } = tokenMetadata || {}

  const {
    logoURI: collectionLogoURI,
    name: collectionName = 'Unknown Collection',
  } = contractInfo || {}

  const balanceFormatted = ethers.utils.formatUnits(quantityRaw, decimals)

  return (
    <Card flexDirection="row" alignItems="flex-start" justifyContent="space-between">
      <Box flexDirection="row" alignItems="center" justifyContent="center" gap="2">
        <Box aspectRatio="1/1" height="full" width="full" justifyContent="center" alignItems="center">
          <Image src={image} borderRadius="md" style={{ height: '80px' }} />
        </Box>
        <Box flexDirection="column" alignItems="flex-start" justifyContent="center" gap="2">
          <Box gap="1" alignItems="center">
            <CoinIcon size={12} imageUrl={collectionLogoURI} />
            <Text marginLeft="1" fontSize="small" color="text80" fontWeight="bold">
              {collectionName}
            </Text>
            <CoinIcon size={12} imageUrl={nativeTokenInfo.logoURI} />
          </Box>
          <Box
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            style={{
              width: '180px'
            }}
          >
            <Text color="text100" fontSize="normal" fontWeight="normal">{name}</Text>
            <Text color="text50" fontSize="normal" fontWeight="normal">{`#${tokenId}`}</Text>
          </Box>
        </Box>
      </Box>
      <Box height="full" fontSize="small" color="text50" fontWeight="bold">
        {`x${formatDisplay(balanceFormatted)}`}
      </Box>
    </Card>
  )
}
