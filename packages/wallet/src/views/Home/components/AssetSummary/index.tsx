import React from 'react'
import { Box, vars } from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'
import { ethers } from 'ethers'
import { useAccount, useNetwork } from 'wagmi'

import { CoinTile } from '../CoinTile'
import { SkeletonTiles } from './SkeletonTiles'

import { useBalances } from '../../../../hooks'

export const AssetSummary = () => {
  const { address } = useAccount()
  const { chain } = useNetwork()

  const { data: balances = [], isLoading: isLoadingBalances } = useBalances({ accountAddress: address || '', chainId: chain?.id || 1 })

  if (isLoadingBalances) {
    return (
      <SkeletonTiles />
    )
  }

  const nativeTokens: TokenBalance[] = []
  const erc20Tokens: TokenBalance[] = []
  const collectibles: TokenBalance[] = []

  balances.forEach((balance) => {
    // Note: contractType for the native token should be "UNKNOWN"
    if (balance.contractAddress === ethers.constants.AddressZero) {
      nativeTokens.push(balance)
    } else if (balance.contractType === 'ERC20') {
      erc20Tokens.push(balance)
    } else if (balance.contractType === 'ERC721' || balance.contractType === 'ERC1155') {
      collectibles.push(balance)
    }
  })

  return (
    <Box flexDirection="row" gap="2" flexWrap="wrap">
      {nativeTokens.map((balance) => {
        return (
          <Box
            key={balance.contractAddress}
            aspectRatio='1/1'
            style={{
              width: `calc(50% - ${vars.space[2]})`
            }}
          >
            <CoinTile balance={balance} />
          </Box>
        )
      })}
      {erc20Tokens.map((balance) => {
        return (
          <Box
            key={balance.contractAddress}
            aspectRatio='1/1'
            style={{
              width: `calc(50% - ${vars.space[2]})`
            }}
          >
            {ethers.utils.formatUnits(balance.balance, balance.contractInfo?.decimals || 18)}
          </Box>
        )
      })}
      {collectibles.map((balance) => {
        return (
          <Box
            aspectRatio='1/1'
            key={balance.contractAddress}
            style={{
              width: `calc(50% - ${vars.space[2]})`
            }}
          >
            {ethers.utils.formatUnits(balance.balance, balance.contractInfo?.decimals || 18)}
          </Box>
        )
      })}
    </Box>
  )
}