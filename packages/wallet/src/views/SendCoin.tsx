import React, { useEffect, ChangeEvent } from "react"
import { ethers } from 'ethers'
import { Box, Button, Text, NumericInput, TextInput, vars } from '@0xsequence/design-system'
import { useAccount, useChainId, useWalletClient } from 'wagmi'

import { ERC_20_ABI } from '../constants'
import { useBalances, useCoinPrices } from '../hooks'
import { Loader } from '../shared/Loader'
import { getNativeTokenInfoByChainId } from '../utils'
import { HEADER_HEIGHT } from '../constants'

interface SendCoinProps {
  chainId: number
  contractAddress: string
}

export const SendCoin = ({
  chainId,
  contractAddress
}: SendCoinProps) => {
  const connectedChainID = useChainId()
  const { data: walletClient } = useWalletClient()
  const { address: accountAddress = '' } = useAccount()
  const { data: balances = [], isLoading: isLoadingBalances } = useBalances({
    accountAddress: accountAddress,
    chainId,
    contractAddress,
  })
  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)

  const {
    data: coinPrices = [],
    isLoading: isLoadingCoinPrices
  } = useCoinPrices({
    tokens: [{
      chainId,
      contractAddress
    }]
  });

  const isLoading =  isLoadingBalances || isLoadingCoinPrices

  if (isLoading) {
    return (
      <Box>
        loading
      </Box>
    )
  }

  return (
    <Box
      padding="5"
      paddingTop="3"
      style={{
        marginTop: HEADER_HEIGHT
      }}
    >
      send collectible flow
      <Box>
        {`chainId: ${chainId}`}
      </Box>
      <Box>
        {`contractAddress: ${contractAddress}`}
      </Box>
    </Box>
  )
}