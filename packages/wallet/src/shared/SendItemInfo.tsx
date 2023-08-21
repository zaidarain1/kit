import { Box, Image, Text, vars } from '@0xsequence/design-system'

import React from 'react'
import { Skeleton } from './Skeleton'
import { ethers } from 'ethers'

import { CoinIcon } from './CoinIcon'
import { formatDisplay, getFiatCurrencyById, getNativeTokenInfoByChainId } from '../utils'
import { useSettings } from '../hooks'

interface SendItemInfoProps {
  name: string,
  symbol: string,
  decimals: number,
  balance: string,
  imageUrl?: string,
  fiatValue: string,
  chainId: number
}

export const SendItemInfoSkeleton = () => {
  return (
    <Box alignItems="center" justifyContent="space-between">
      <Box justifyContent="center" alignItems="center" gap="2">
        <Skeleton width={30} height={30} borderRadius="circle" />
        <Box flexDirection="column" gap="2" alignItems="flex-start">
          <Skeleton width={100} height={14} />
          <Skeleton width={75} height={14} />
        </Box>
      </Box>
      <Box flexDirection="column" gap="2" alignItems="flex-end">
        <Skeleton width={100} height={14} />
        <Skeleton width={50} height={12} />
      </Box>
    </Box>
  )
}

export const SendItemInfo = ({
  imageUrl,
  name,
  decimals,
  balance,
  symbol,
  fiatValue,
  chainId,
}: SendItemInfoProps) => {
  const { fiatCurrency } = useSettings()
  const fiatCurrencyInfo = getFiatCurrencyById(fiatCurrency)
  const formattedBalance = ethers.utils.formatUnits(balance, decimals)
  const balanceDisplayed = formatDisplay(formattedBalance)
  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)

  return (
    <Box alignItems="flex-end" justifyContent="space-between">
      <Box justifyContent="space-between" alignItems="center" gap="2">
        <CoinIcon imageUrl={imageUrl} size={40} />
        <Box flexDirection="column" alignItems="flex-start">
          <Box flexDirection="row" alignItems="center" gap="1">
            <Text variant="medium">{name}</Text>
            <CoinIcon imageUrl={nativeTokenInfo.logoURI} size={12} />
          </Box>
          <Text color="text50" variant="normal"> {`${balanceDisplayed} ${symbol} available`}</Text>
        </Box>
      </Box>
      <Box flexDirection="column" alignItems="flex-end" justifyContent="flex-end">
        <Text variant="normal">{`${fiatCurrencyInfo.symbol}${fiatValue}`}</Text>
      </Box>
    </Box>
  )
}