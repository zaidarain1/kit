import React from 'react'
import { Box, Card } from '@0xsequence/design-system'

import { CoinIcon } from '../../../shared/components/CoinIcon'

import { getNativeTokenInfoByChainId } from '../../../utils'

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
  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)

  return (
    <Card>
      <CoinIcon size={12} imageUrl={nativeTokenInfo.logoURI} />
      stuff go here...
    </Card>
  )
}