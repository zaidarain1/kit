import React, { useState, ChangeEvent } from "react"
import { ethers } from 'ethers'
import {
  Box,
  Button,
  ChevronRightIcon,
  CopyIcon,
  CloseIcon,
  GradientAvatar,
  Text,
  NumericInput,
  TextInput,
  vars
} from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'
import { useAccount, useWalletClient } from 'wagmi'

import { SendItemInfo } from '../shared/SendItemInfo'
import { ERC_20_ABI } from '../constants'
import { useBalances, useCoinPrices, useSettings, useOpenWalletModal } from '../hooks'
import {
  compareAddress,
  computeBalanceFiat,
  getNativeTokenInfoByChainId,
  limitDecimals,
  isEthAddress,
  getFiatCurrencyById,
  truncateAtMiddle
} from '../utils'
import { HEADER_HEIGHT } from '../constants'
import * as sharedStyles from '../shared/styles.css'

interface SendCoinProps {
  chainId: number
  contractAddress: string
}

export const SendCoin = ({
  chainId,
  contractAddress
}: SendCoinProps) => {
  const setOpenWalletModal = useOpenWalletModal()
  const { fiatCurrency } = useSettings()
  const fiatCurrencyInfo = getFiatCurrencyById(fiatCurrency)
  const [amount, setAmount] = useState<string>('0')
  const [toAddress, setToAddress] = useState<string>('')
  const { data: walletClient } = useWalletClient()
  const { address: accountAddress = '' } = useAccount()
  const { data: balances = [], isLoading: isLoadingBalances } = useBalances({
    accountAddress: accountAddress,
    chainId,
    contractAddress,
  })
  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)
  const tokenBalance = balances.find(b => b.contractAddress === contractAddress)
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
      null
    )
  }

  const isNativeCoin = compareAddress(contractAddress, ethers.constants.AddressZero)
  const decimals = isNativeCoin ? nativeTokenInfo.decimals : tokenBalance?.contractInfo?.decimals || 18
  const name = isNativeCoin ? nativeTokenInfo.name : tokenBalance?.contractInfo?.name || ''
  const imageUrl = isNativeCoin ? nativeTokenInfo.logoURI : tokenBalance?.contractInfo?.logoURI
  const symbol = isNativeCoin ? nativeTokenInfo.symbol : tokenBalance?.contractInfo?.symbol || ''
  const amountToSendFormatted = amount === '' ? '0' : amount
  const amountRaw = ethers.utils.parseUnits(amountToSendFormatted, decimals)


  const amountToSendFiat = computeBalanceFiat({
    ...tokenBalance as TokenBalance,
    balance: amountRaw.toString()
  },coinPrices)

  const insufficientFunds = amountRaw.gt(tokenBalance?.balance || '0') 
  const isNonZeroAmount = amountRaw.gt(0)

  const handleChangeAmount = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target

    // Prevent value from having more decimals than the token supports
    const formattedValue = limitDecimals(value, decimals)

    setAmount(formattedValue)
  }

  const handleMax = () => {
    const maxAmount = ethers.utils.formatUnits(tokenBalance?.balance || 0, decimals).toString()
    
    setAmount(maxAmount)
  }

  const handlePaste = async () => {
    const result = await navigator.clipboard.readText()
    setToAddress(result)
  }

  const handleToAddressClear = () => {
    setToAddress('')
  }

  const executeTransaction = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const sendAmount = ethers.utils.parseUnits(amountToSendFormatted, decimals)

    if (isNativeCoin) {
      walletClient?.sendTransaction({
        to: toAddress as `0x${string}}`,
        value: BigInt(sendAmount.toString())
      }).catch(e => console.error('User rejected transaction', e))
    } else {
      walletClient?.sendTransaction({
        to: tokenBalance?.contractAddress as `0x${string}}`,
        data: new ethers.utils.Interface(ERC_20_ABI).encodeFunctionData('transfer', [toAddress, sendAmount.toHexString()]) as `0x${string}`
      }).catch(e => console.error('User rejected transaction', e))
    }
    setOpenWalletModal && setOpenWalletModal(false)
  }

  const maxAmount = ethers.utils.formatUnits(tokenBalance?.balance || 0, decimals).toString()
  const isMaximum = Number(amount) >= Number(maxAmount)  

  return (
    <Box
      padding="5"
      paddingTop="3"
      style={{
        marginTop: HEADER_HEIGHT
      }}
      gap="2"
      flexDirection="column"
      as="form"
      onSubmit={executeTransaction}
    >
      <Box
        background="backgroundSecondary"
        borderRadius="md"
        padding="4"
        gap="2"
        flexDirection="column"
      >
        <SendItemInfo
          imageUrl={imageUrl}
          decimals={decimals}
          name={name}
          symbol={symbol}
          balance={tokenBalance?.balance || '0'}
          fiatValue={computeBalanceFiat(tokenBalance as TokenBalance, coinPrices)}
          chainId={chainId}
        />
        <NumericInput
          style={{ fontSize: vars.fontSizes.xlarge, fontWeight: vars.fontWeights.bold }}
          name="amount"
          value={amount}
          onChange={handleChangeAmount}
          controls={
            <>
              <Text variant="small" color="text50" whiteSpace="nowrap">
                {`~${fiatCurrencyInfo.symbol}${amountToSendFiat}`}
              </Text>
              <Button size="xs" shape="square" label="Max" onClick={handleMax} data-id="maxCoin" flexShrink="0" />
              <Text fontSize="xlarge" fontWeight="bold">{symbol}</Text>
            </>
          }
        />
        {insufficientFunds && (
          <Text as="div" variant="normal" color="negative" marginTop="2">
            Insufficient Funds
          </Text>
        )}
      </Box>
      <Box
        background="backgroundSecondary"
        borderRadius="md"
        padding="4"
        gap="2"
        flexDirection="column"
      >
        <Text fontSize="normal" color="text50">To</Text>
        {isEthAddress(toAddress) ? (
          <Box
            borderRadius="md"
            background="backgroundSecondary"
            width="full"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            padding="4"
            className={sharedStyles.clickable}
            onClick={handleToAddressClear}
            style={{ height: '52px' }}
          >
            <Box flexDirection="row" justifyContent="center" alignItems="center" gap="2">
              <GradientAvatar address={toAddress} style={{ width: '20px' }} />
              <Text color="text100">
                {`0x${truncateAtMiddle(toAddress.substring(2), 8)}`}
              </Text>
            </Box>
            <CloseIcon size="xs" />
          </Box>
        ) : (
          <TextInput
            value={toAddress}
            onChange={ev => setToAddress(ev.target.value)}
            placeholder={`${nativeTokenInfo.name} Address (0x...)`}
            name="to-address"
            controls={
              <Button
                size="xs"
                shape="square"
                label="Paste"
                onClick={handlePaste}
                data-id="to-address"
                flexShrink="0"
                leftIcon={CopyIcon}
              />
            }
          />
        )}
      </Box>

      <Button
        marginTop="3"
        width="full"
        variant="primary"
        type="submit"
        disabled={!isNonZeroAmount || !isEthAddress(toAddress) || insufficientFunds}
        label="Send"
        rightIcon={ChevronRightIcon}
        style={{ height: '52px', borderRadius: vars.radii.md }}
      />
    </Box>
  )
}