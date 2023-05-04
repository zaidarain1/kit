import { Box } from '@0xsequence/design-system'
import { ethers } from 'ethers'
import React from 'react'
import { useAccount, useNetwork } from 'wagmi'

import { CoinRow } from './CoinRow'

import { getNativeTokenInfoByChainId } from '../utils'
import { useBalances } from '../hooks'

export const CoinsSummary = () => {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1

  const { data: balances, isLoading } = useBalances({ accountAddress: address || '', chainId })

  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)

  const nativeToken = balances?.find(b => b.contractAddress === ethers.constants.AddressZero)

  const erc20Tokens = balances?.filter(b => b.contractType === 'ERC20')

  // TODO: add skeleton loader

  return (
    <Box width="full" flexDirection="column" gap="2">
      {nativeToken && (
        <CoinRow
          imageUrl={nativeTokenInfo.logoURI}
          decimals={nativeTokenInfo.decimals}
          name={nativeTokenInfo.name}
          symbol={nativeTokenInfo.symbol}
          balance={nativeToken.balance} 
        />
      )}
      {erc20Tokens && (
        erc20Tokens.map(token => (
          <CoinRow
            imageUrl={token.contractInfo?.logoURI || ''}
            decimals={token.contractInfo?.decimals || 18}
            name={token.contractInfo?.name || ''}
            symbol={token.contractInfo?.symbol || ''}
            balance={token.balance} 
          />
        ))
      )}
    </Box>
  )
}