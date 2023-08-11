import React from 'react'
import { ethers } from 'ethers'
import { Box, Button, Image, SendIcon, Text } from '@0xsequence/design-system'

import { useAccount } from 'wagmi'

import { CoinDetailsSkeleton } from './Skeleton'

import { NetworkBadge } from '../../shared/NetworkBadge'
import {
  useCoinBalance,
  useSettings,
  useCoinPrices
} from '../../hooks'
import { HEADER_HEIGHT } from '../../constants'
import {
  getNativeTokenInfoByChainId,
  compareAddress,
  getNetworkConfigAndClients,
  getFiatCurrencyById,
  computeBalanceFiat,
  formatDisplay
} from '../../utils'

export interface CoinDetailsProps {
  contractAddress: string
  chainId: number
}

export const CoinDetails = ({
  contractAddress,
  chainId
}: CoinDetailsProps) => {
  const { fiatCurrency } = useSettings()

  const fiatCurrencyInfo = getFiatCurrencyById(fiatCurrency)
  
  const { address: accountAddress } = useAccount()

  const { data: dataCoinBalance , isLoading: isLoadingCoinBalance } = useCoinBalance({
    accountAddress: accountAddress || '',
    contractAddress,
    chainId
  })

  const { data: dataCoinPrices, isLoading: isLoadingCoinPrices } = useCoinPrices({
    tokens: [{
      chainId,
      contractAddress,  
    }]
  })

  const isLoading = isLoadingCoinBalance || isLoadingCoinPrices

  if (isLoading) {
    return (
      <CoinDetailsSkeleton chainId={chainId} />
    )
  }

  const isNativeToken = compareAddress(contractAddress, ethers.constants.AddressZero)
  const logo = isNativeToken ? getNativeTokenInfoByChainId(chainId).logoURI : dataCoinBalance?.contractInfo?.logoURI
  const symbol = isNativeToken ? getNativeTokenInfoByChainId(chainId).symbol : dataCoinBalance?.contractInfo?.symbol
  const name = isNativeToken ? getNativeTokenInfoByChainId(chainId).name : dataCoinBalance?.contractInfo?.name
  const decimals = isNativeToken ? getNativeTokenInfoByChainId(chainId).decimals : dataCoinBalance?.contractInfo?.decimals
  const formattedBalance = ethers.utils.formatUnits(dataCoinBalance?.balance || '0', decimals)
  const balanceDisplayed = formatDisplay(formattedBalance)

  const coinBalanceFiat = dataCoinBalance? computeBalanceFiat(dataCoinBalance, dataCoinPrices || []) : '0'

  const onClickSend = () => {
    console.log('clicked send!')
  }

  return (
    <Box style={{ paddingTop: HEADER_HEIGHT }}>
      <Box padding="5" paddingTop="3" marginBottom="10">
        <Box marginBottom="10" gap="2" alignItems="center" justifyContent="center" flexDirection="column">
          <Image width="8" src={logo} alt="logo" />
          <Text
            color="text100"
            fontWeight="bold"
            fontSize="large"
          >
            {name}
          </Text>
          <NetworkBadge chainId={chainId} />
        </Box>
        <Box>
          <Text fontWeight="medium" color="text50" fontSize="normal">Balance</Text>
          <Box flexDirection="row" alignItems="flex-end" justifyContent="space-between">
            <Text
              fontWeight='bold'
              color='text100'
              fontSize='xlarge'
            >{`${balanceDisplayed} ${symbol}`}</Text>
            <Text fontWeight="medium" color="text50" fontSize="normal">{`${fiatCurrencyInfo.symbol}${coinBalanceFiat}`}</Text>
          </Box>
        </Box>
        <Button
          marginTop="4"
          marginBottom="10"
          width="full"
          variant="primary"
          leftIcon={SendIcon}
          label="Send"
          onClick={onClickSend}
        />
        <Box>
          <Text fontSize="normal" color="text50" fontWeight="medium">This week</Text>
          <Box>TODO: history</Box>
        </Box>
      </Box>
    </Box>
  )
}