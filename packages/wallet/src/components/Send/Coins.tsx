import { TokenPrice } from '@0xsequence/api'
import { TokenBalance } from '@0xsequence/indexer'
import { Box, Button, NumericInput, Text, TextInput, vars } from '@0xsequence/design-system'
import { ethers } from 'ethers'
import React, { useEffect, ChangeEvent } from 'react'
import { useAccount, useNetwork, useWalletClient } from 'wagmi'

import { CoinRow } from '../CoinRow'
import { Loader } from '../Loader'
import { useBalances, useNavigation, useCoinPrices, useSendCoin, useOpenWalletModal } from '../../hooks'
import { getNativeTokenInfoByChainId, compareAddress, limitDecimals, isEthAddress } from '../../utils'
import { ERC_20_ABI } from '../../constants'

import * as styles from './styles.css'

export const SendCoins = () => {
  const { data: walletClient } = useWalletClient()
  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const { setNavigation } = useNavigation()
  const { data: balances, isLoading: isLoadingBalances } = useBalances({ accountAddress: address || '', chainId })
  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)
  const { amount, setAmount, toAddress, setToAddress, selectedToken, setSelectedToken, resetAll } = useSendCoin()
  const setOpenWalletModal = useOpenWalletModal()

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

  const isLoading =  isLoadingCoinPrices || isLoadingBalances

  const computeFiatBalance = (contractAddress: string, balance: string, decimals: number, prices: TokenPrice[]): string => {
    let totalUsd = 0

    const priceForToken = prices.find(p => compareAddress(p.token.contractAddress, contractAddress))
    if (!priceForToken) {
      return '0.00';
    }
    const priceFiat = priceForToken.price?.value || 0
    const valueFormatted = ethers.utils.formatUnits(balance, decimals)
    const usdValue = parseFloat(valueFormatted) * priceFiat
    totalUsd += usdValue
  
    return `${totalUsd.toFixed(2)}`
  }

  const getPercentagePriceChange = (balance: TokenBalance, prices: TokenPrice[]) => {
    const priceForToken = prices.find(p => compareAddress(p.token.contractAddress, balance.contractAddress))
    if (!priceForToken) {
      return 0;
    }

    const price24HourChange = priceForToken?.price24hChange?.value || 0
    return price24HourChange
  }

  useEffect(() => {
    return(() => {
      resetAll()
    })
  }, [])

  if (isLoading) {
    return (
      <Box marginTop="16">
        <Loader />
      </Box>
    )
  }

  if (!selectedToken) {
    return (
      <>
        <Box cursor="pointer" marginBottom="1">
          <Text variant="normal">Select a coin</Text>
        </Box>
        <Box width="full" flexDirection="column" gap="2">
          {nativeTokenBalance && (
            <Box  
              key={nativeTokenBalance.contractAddress}
              onClick={() => setSelectedToken(nativeTokenBalance)}
              className={styles.clickableRowItem}
            >
              <CoinRow
                imageUrl={nativeTokenInfo.logoURI}
                decimals={nativeTokenInfo.decimals}
                name={nativeTokenInfo.name}
                symbol={nativeTokenInfo.symbol}
                balance={nativeTokenBalance?.balance || '0'}
                fiatValue={computeFiatBalance(nativeTokenBalance.contractAddress, nativeTokenBalance.balance, nativeTokenInfo.decimals, coinPrices)}
                priceChangePercentage={getPercentagePriceChange(nativeTokenBalance, coinPrices)}
              />
            </Box>
          )}
            {erc20Tokens && (
              erc20TokensBalances.sort((a, b) => {
                const isHigherFiat = Number(computeFiatBalance(b.contractAddress, b.balance, b.contractInfo?.decimals || 0 , coinPrices))
                  - Number(computeFiatBalance(a.contractAddress, a.balance, a.contractInfo?.decimals || 0 , coinPrices))
                return isHigherFiat
              })
              .map(token => (
                <Box
                  onClick={() => setSelectedToken(token)}
                  className={styles.clickableRowItem}
                  key={token.contractAddress}
                >
                  <CoinRow
                    imageUrl={token.contractInfo?.logoURI}
                    decimals={token.contractInfo?.decimals || 18}
                    name={token.contractInfo?.name || ''}
                    symbol={token.contractInfo?.symbol || ''}
                    balance={token.balance}
                    fiatValue={computeFiatBalance(token.contractAddress, token.balance, token.contractInfo?.decimals || 0, coinPrices)}
                    priceChangePercentage={getPercentagePriceChange(token, coinPrices)}
                  />
                </Box>
              ))
            )}
        </Box>
      </>
    )
  }

  const isNativeToken = selectedToken.contractAddress === ethers.constants.AddressZero
  const decimals = isNativeToken ? nativeTokenInfo.decimals : selectedToken.contractInfo?.decimals || 18
  const name = isNativeToken ? nativeTokenInfo.name : selectedToken.contractInfo?.name || ''
  const imageUrl = isNativeToken ? nativeTokenInfo.logoURI : selectedToken.contractInfo?.logoURI
  const symbol = isNativeToken ? nativeTokenInfo.symbol : selectedToken.contractInfo?.symbol || ''
  const amountToSendFormatted = amount === '' ? '0' : amount
  const amountToSendForCalculation = amountToSendFormatted.split('.').length === 1 ?  [amountToSendFormatted.split('.')[0], '0'].join('.') : amountToSendFormatted

  const amountToSendFiat = computeFiatBalance(selectedToken.contractAddress, ethers.utils.parseUnits(amountToSendForCalculation, decimals).toString(), decimals, coinPrices)

  const insufficientFunds = ethers.utils.parseUnits(amountToSendForCalculation, decimals).gt(selectedToken.balance) 
  const isNonZeroAmount = ethers.BigNumber.from(ethers.utils.parseUnits(amountToSendForCalculation, decimals)).gt(0)

  const handleChangeAmount = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target

    // Prevent value from having more decimals than the token supports
    const formattedValue = limitDecimals(value, decimals)

    setAmount(formattedValue)
  }

  const handleMax = () => {
    const maxAmount = ethers.utils.formatUnits(selectedToken.balance, decimals).toString()
    
    setAmount(maxAmount)
  }

  const executeTransaction = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isNative = selectedToken.contractAddress === ethers.constants.AddressZero
    const sendAmount = ethers.utils.parseUnits(amountToSendForCalculation, decimals)

    if (isNative) {
      walletClient?.sendTransaction({
        to: toAddress as `0x${string}}`,
        value: BigInt(sendAmount.toString())
      }).catch(e => console.error('User rejected transaction', e))
    } else {
      walletClient?.sendTransaction({
        to: selectedToken.contractAddress as `0x${string}}`,
        data: new ethers.utils.Interface(ERC_20_ABI).encodeFunctionData('transfer', [toAddress, sendAmount.toHexString()]) as `0x${string}`
      }).catch(e => console.error('User rejected transaction', e))
    }
    setOpenWalletModal && setOpenWalletModal(false)
    resetAll()
  }

  return (
    <Box as="form" gap="4" flexDirection="column" onSubmit={executeTransaction}>
      <Button label="Change Coin" onClick={() => {
        setSelectedToken(undefined)
        setAmount('')
      }} />
      <CoinRow
        key={selectedToken.contractAddress}
        imageUrl={imageUrl}
        decimals={decimals}
        name={name}
        symbol={symbol}
        balance={selectedToken.balance}
        fiatValue={computeFiatBalance(selectedToken.contractAddress, selectedToken.balance, decimals, coinPrices)}
        priceChangePercentage={getPercentagePriceChange(selectedToken, coinPrices)}
      />

      <Box gap="2" flexDirection="column">
        <Text variant="small">Amount to Send</Text>
        <NumericInput
          style={{ fontSize: vars.fontSizes.normal, fontWeight: vars.fontWeights.normal }}
          name="amount"
          value={amount}
          onChange={handleChangeAmount}
          controls={
            <>
              <Text variant="small" color="text50" whiteSpace="nowrap">
                ~${amountToSendFiat}
              </Text>
              <Button size="xs" shape="square" label="Max" onClick={handleMax} data-id="maxCoin" flexShrink="0" />
            </>
          }
        />
        {insufficientFunds && (
          <Text as="div" variant="normal" color="negative" marginTop="2">
            Insufficient Funds
          </Text>
        )}
      </Box>

      <Box gap="2" flexDirection="column">
        <Text variant="small">Recipient Address</Text>
        <TextInput
          value={toAddress}
          onChange={ev => setToAddress(ev.target.value)}
          placeholder="Recipient Address (0x...)"
          name="to-address"
        />
      </Box>

      <Button type="submit" disabled={!isNonZeroAmount || !isEthAddress(toAddress) || insufficientFunds} label="Execute" />
    </Box>
  )
}