import { Box, Button, Text, ChevronRightIcon } from '@0xsequence/design-system'
import { ethers } from 'ethers'
import React from 'react'
import { useAccount, useNetwork } from 'wagmi'

import { CoinRow, CoinRowSkeleton } from './CoinRow'

import { getNativeTokenInfoByChainId, getPercentagePriceChange, computeBalance } from '../utils'
import { useBalances, useNavigation, useCoinPrices } from '../hooks'

export const CoinsSummary = () => {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const { setNavigation } = useNavigation()

  const { data: balances, isLoading: isLoadingBalances } = useBalances({ accountAddress: address || '', chainId })

  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)

  const nativeTokenBalance = balances?.find(b => b.contractAddress === ethers.constants.AddressZero)

  const erc20TokensBalances = balances?.filter(b => b.contractType === 'ERC20') || []

  const nativeToken = {
    chainId,
    contractAddress: ethers.constants.AddressZero
  };

  const erc20Tokens = erc20TokensBalances.map(token => ({
    chainId,
    contractAddress: token.contractAddress
  }));

  const {
    data: coinPrices = [],
    isLoading: isLoadingCoinPrices
  } = useCoinPrices({
    tokens: [nativeToken, ...erc20Tokens]
  });

  const onClickViewAllCoins = () => {
    setNavigation && setNavigation({
      location: 'all-coins'
    })
  }

  const isLoading = isLoadingBalances || isLoadingCoinPrices

  if (isLoading) {
    return (
      <Box>
        <Box marginBottom="1">
          <Text variant="small" color="text50">{`Coins`}</Text>
        </Box>
        <Box width="full" flexDirection="column" gap="2">
          <CoinRowSkeleton />
          <CoinRowSkeleton />
          <Button onClick={onClickViewAllCoins} variant="emphasis" label={`View All Coins`} rightIcon={ChevronRightIcon} />
        </Box>
      </Box>
    )
  }

  const totalTokens = 1 + (erc20Tokens?.length || 0)

  return (
    <Box>
      <Box onClick={onClickViewAllCoins} cursor="pointer" marginBottom="1">
        <Text variant="small" color="text50">{`Coins (${totalTokens})`}</Text>
      </Box>
      <Box width="full" flexDirection="column" gap="2">
        {nativeTokenBalance && (
          <CoinRow
            imageUrl={nativeTokenInfo.logoURI}
            decimals={nativeTokenInfo.decimals}
            name={nativeTokenInfo.name}
            symbol={nativeTokenInfo.symbol}
            balance={nativeTokenBalance?.balance || '0'}
            fiatValue={computeBalance(nativeTokenBalance, coinPrices)}
            priceChangePercentage={getPercentagePriceChange(nativeTokenBalance, coinPrices)}
          />
        )}
        {erc20Tokens && (
          erc20TokensBalances.sort((a, b) => {
            const isHigherFiat = Number(computeBalance(b, coinPrices)) - Number(computeBalance(a, coinPrices))
            return isHigherFiat
          })
          .slice(0, 1).map(token => (
            <CoinRow
              key={token.contractAddress}
              imageUrl={token.contractInfo?.logoURI}
              decimals={token.contractInfo?.decimals || 18}
              name={token.contractInfo?.name || ''}
              symbol={token.contractInfo?.symbol || ''}
              balance={token.balance}
              fiatValue={computeBalance(token, coinPrices)}
              priceChangePercentage={getPercentagePriceChange(token, coinPrices)}
            />
          ))
        )}
        <Button onClick={onClickViewAllCoins} variant="emphasis" label={`View All Coins`} rightIcon={ChevronRightIcon} />
      </Box>
    </Box>
  )
}