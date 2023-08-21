import React, { useState, ChangeEvent } from "react"
import { ethers } from 'ethers'
import {
  Box,
  Button,
  ChevronRightIcon,
  CopyIcon,
  CloseIcon,
  GradientAvatar,
  AddIcon,
  SubtractIcon,
  Text,
  NumericInput,
  TextInput,
  vars
} from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'
import { useAccount, useWalletClient } from 'wagmi'

import { SendItemInfo } from '../shared/SendItemInfo'
import { ERC_1155_ABI, ERC_721_ABI } from '../constants'
import {
  useCollectibleBalance,
  useSettings,
  useOpenWalletModal
} from '../hooks'
import {
  getNativeTokenInfoByChainId,
  limitDecimals,
  isEthAddress,
  truncateAtMiddle
} from '../utils'
import { HEADER_HEIGHT } from '../constants'
import * as sharedStyles from '../shared/styles.css'

interface SendCollectibleProps {
  chainId: number
  contractAddress: string
  tokenId: string
}

export const SendCollectible = ({
  chainId,
  contractAddress,
  tokenId
}: SendCollectibleProps) => {
  const setOpenWalletModal = useOpenWalletModal()
  const { fiatCurrency } = useSettings()
  const [amount, setAmount] = useState<string>('0')
  const [toAddress, setToAddress] = useState<string>('')
  const { data: walletClient } = useWalletClient()
  const { address: accountAddress = '' } = useAccount()
  const { data: tokenBalance, isLoading: isLoadingBalances } = useCollectibleBalance({
    accountAddress: accountAddress,
    chainId,
    collectionAddress: contractAddress,
    tokenId,
  })
  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId)

  const isLoading =  isLoadingBalances

  if (isLoading) {
    return (
      null
    )
  }

  const decimals = tokenBalance?.tokenMetadata?.decimals || 0
  const name = tokenBalance?.tokenMetadata?.name || 'Unknown'
  const imageUrl = tokenBalance?.tokenMetadata?.image || tokenBalance?.contractInfo?.logoURI || ''
  const amountToSendFormatted = amount === '' ? '0' : amount
  const amountRaw = ethers.utils.parseUnits(amountToSendFormatted, decimals)

  const insufficientFunds = amountRaw.gt(tokenBalance?.balance || '0') 
  const isNonZeroAmount = amountRaw.gt(0)

  const handleChangeAmount = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target

    // Prevent value from having more decimals than the token supports
    const formattedValue = limitDecimals(value, decimals)

    setAmount(formattedValue)
  }

  const handleSubtractOne = () => {
    // TODO: handle subtract one
    // disable button when amount is 0
  }

  const handleAddOne = () => {
    // TODO: handle add one
    // disable button when amount is max
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
    const { contractType } = tokenBalance as TokenBalance

    switch(contractType) {
      case 'ERC721':
        // _from, _to, _id
        walletClient?.sendTransaction({
          to: (tokenBalance as TokenBalance).contractAddress as `0x${string}}`,
          data: new ethers.utils.Interface(ERC_721_ABI).encodeFunctionData('safeTransferFrom', [
            accountAddress,
            toAddress,
            tokenId,
          ]) as `0x${string}`
        }).catch(e => console.error('User rejected transaction', e))
        break;
      case 'ERC1155':
      default:
        // _from, _to, _ids, _amounts, _data
        walletClient?.sendTransaction({
          to: (tokenBalance as TokenBalance).contractAddress as `0x${string}}`,
          data: new ethers.utils.Interface(ERC_1155_ABI).encodeFunctionData('safeBatchTransferFrom', [
            accountAddress,
            toAddress,
            [tokenId],
            [sendAmount.toHexString()],
            []
          ]) as `0x${string}`
        }).catch(e => console.error('User rejected transaction', e))
    }
    setOpenWalletModal && setOpenWalletModal(false)
  }

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
          showSquareImage
          decimals={decimals}
          name={name}
          symbol={''}
          balance={tokenBalance?.balance || '0'}
          chainId={chainId}
        />
        <NumericInput
          style={{ fontSize: vars.fontSizes.xlarge, fontWeight: vars.fontWeights.bold }}
          name="amount"
          value={amount}
          onChange={handleChangeAmount}
          controls={
            <Box gap="2">
              <Button size="xs" onClick={handleSubtractOne} leftIcon={SubtractIcon} />
              <Button size="xs" onClick={handleAddOne} leftIcon={AddIcon} />
              <Button size="xs" shape="square" label="Max" onClick={handleMax} data-id="maxCoin" flexShrink="0" />
            </Box>
          }
        />
        {insufficientFunds && (
          <Text as="div" variant="normal" color="negative" marginTop="2">
            Insufficient Balance
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