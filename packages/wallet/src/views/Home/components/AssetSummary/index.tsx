import React from 'react'
import { Box, vars } from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'
import { ethers } from 'ethers'
import { useAccount, useNetwork } from 'wagmi'

import { CoinTile } from './CoinTile'
import { CollectibleTile } from './CollectibleTile'
import { SkeletonTiles } from './SkeletonTiles'

import { sortBalancesByType } from '../../../../utils'
import { useBalances, useBalancesAssetsSummary } from '../../../../hooks'

export const AssetSummary = () => {
  const { address } = useAccount()
  const { chain } = useNetwork()

  const { data: balances = [], isLoading: isLoadingBalances } = useBalancesAssetsSummary({ accountAddress: address || '', chainId: chain?.id || 1 })

  if (isLoadingBalances) {
    return (
      <SkeletonTiles />
    )
  }

  const { nativeTokens, erc20Tokens, collectibles } = sortBalancesByType(balances)

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
            <CoinTile balance={balance} />
          </Box>
        )
      })}
        {/* TODO: from the collection get the collectibles
         maybe 2 max per collection to avoid overcrowding  

      {collectibles.map((balance) => {
        return (
          <Box
            aspectRatio='1/1'
            key={balance.contractAddress}
            style={{
              width: `calc(50% - ${vars.space[2]})`
            }}
          >
            <CollectibleTile balance={balance} />
          </Box>
        )
      })} */}
    </Box>
  )
}