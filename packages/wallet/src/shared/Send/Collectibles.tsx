import { ethers } from 'ethers'
import { Box, Button, Text, NumericInput, TextInput, vars } from '@0xsequence/design-system'
import React, { useEffect, ChangeEvent } from "react"
import { useAccount, useNetwork, useWalletClient } from 'wagmi'
import { ERC_1155_ABI, ERC_721_ABI } from '../../constants'

import { CollectibleSelector } from './CollectibleSelector'
import { CollectionSelector } from './CollectionSelector'

import { Loader } from '../../shared/Loader'

import {
  useSendCollectibles,
  useNavigation,
  useBalances,
  useCollectionBalance,
  useOpenWalletModal
} from '../../hooks'
import { formatAddress, formatDisplay, limitDecimals, isEthAddress } from '../../utils'

import * as styles from './styles.css'

export const SendCollectibles = () => {
  const { data: walletClient } = useWalletClient()
  const {
    collectibles,
    setCollectibles,
    collection,
    setCollection,
    toAddress,
    setToAddress,
    resetAll
  } = useSendCollectibles()

  const setOpenWalletModal = useOpenWalletModal()

  const { address } = useAccount()
  const { chain } = useNetwork()
  const chainId = chain?.id || 1
  const { setNavigation } = useNavigation()

  const { data: balances, isLoading: isLoadingBalances } = useBalances({ accountAddress: address || '', chainId })
  const { data: collectionBalanceData, isLoading: isLoadingCollectionBalance } = useCollectionBalance({ accountAddress: address || '', chainId, collectionAddress: collection?.collectionAddress || '' })

  const collections = balances?.filter(b => b.contractType === 'ERC721' || b.contractType === 'ERC1155')

  useEffect(() => {
    return(() => {
      resetAll()
    })
  }, [])

  const onClickCollection = (contractAddress: string, chainId: number) => {
    setCollection({
      collectionAddress: contractAddress,
      chainId
    })
  }

  const isLoading = (!collection && isLoadingBalances) || (collection && isLoadingCollectionBalance)

  if (isLoading) {
    return (
      <Box marginTop="16">
        <Loader />
      </Box>
    )
  }

  if (!collection) {
    return (
      <Box>
        <Box cursor="pointer" marginBottom="1">
          <Text variant="normal">Select a collection</Text>
        </Box>
        <Box width="full" flexDirection="column" gap="2">
          {collections?.length === 0 ? (
            <Box>
              No Collections Found
            </Box>
          ) : (
            <>
              {collections?.map(c => {
                return (
                  <Box
                    key={c.contractAddress}
                    flexDirection="column"
                    borderRadius="md"
                    cursor="pointer"
                    style={{ userSelect: 'none' }}
                    className={styles.clickableRowItem}
                    onClick={() => onClickCollection(c.contractAddress, c.chainId)}
                  >
                    <CollectionSelector
                      name={c.contractInfo?.name || formatAddress(c.contractAddress)}
                      imageUrl={c.contractInfo?.logoURI}
                      quantity={c.balance}
                    />
                  </Box>
                )
              })}
            </>
          )}
        </Box>
      </Box>
    )
  }

  if (collectibles.length === 0) {
    return (
      <>
        <Box cursor="pointer" marginBottom="1">
          <Text variant="normal">Select collectible</Text>
        </Box>
        <Box
          gap="2"
          flexDirection="column"
        >
          {collectionBalanceData?.map((c) => {
            const unformattedBalance = c.balance
            const decimals = c.tokenMetadata?.decimals || 0 
            const formattedBalance = formatDisplay(
              ethers.utils.formatUnits(unformattedBalance, decimals)
            )
      
            return (
              <Box
                key={`${c.contractAddress}-${c.tokenID}`}
                cursor="pointer"
                className={styles.clickableRowItem}
                style={{ userSelect: 'none' }}
                onClick={() => {
                  setCollectibles([{
                    tokenId: c.tokenID,
                    amount: '0'
                  }])
                }}
              >
                <CollectibleSelector
                  imageUrl={c.tokenMetadata?.image}
                  quantity={formattedBalance}
                  name={c.tokenMetadata?.name}
                  tokenId={c.tokenID}
                  isSelected={false}
                />
              </Box>
            )
          })}
        </Box>
      </>
    )
  }

  const selectedCollectible = collectibles[0]
  const selectedCollectibleBalance = collectionBalanceData?.find(c => c.tokenID === selectedCollectible.tokenId)

  if (!selectedCollectibleBalance) {
    return (
      <Box>
        <Text variant="normal">
          Token not found
        </Text>
      </Box>
    )
  }

  const unformattedBalance = selectedCollectibleBalance.balance
  const decimals = selectedCollectibleBalance.tokenMetadata?.decimals || 0 
  const formattedBalance = formatDisplay(
    ethers.utils.formatUnits(unformattedBalance, decimals)
  )

  const amount = selectedCollectible.amount

  const amountToSendFormatted = amount === '' ? '0' : amount
  const amountToSendForCalculation = amountToSendFormatted.split('.').length === 1 ?  [amountToSendFormatted.split('.')[0], '0'].join('.') : amountToSendFormatted
  const insufficientFunds = ethers.utils.parseUnits(amountToSendForCalculation, decimals).gt(selectedCollectibleBalance.balance) 
  const isNonZeroAmount = (ethers.BigNumber.from(ethers.utils.parseUnits(amountToSendForCalculation, decimals)).gt(0) && selectedCollectibleBalance.contractType === 'ERC1155') || selectedCollectibleBalance.contractType === 'ERC721' 

  const setAmount = (amount: string) => {
    setCollectibles([{
      tokenId: selectedCollectible.tokenId,
      amount
    }])
  }

  const handleMax = () => {
    const maxAmount = ethers.utils.formatUnits(selectedCollectibleBalance.balance, decimals).toString()
    
    setAmount(maxAmount)
  }

  const handleChangeAmount = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target

    // Prevent value from having more decimals than the token supports
    const formattedValue = limitDecimals(value, decimals)

    setAmount(formattedValue)
  }

  const executeTransaction = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const sendAmount = ethers.utils.parseUnits(amountToSendForCalculation, decimals)
    const { contractType } = selectedCollectibleBalance

    switch(contractType) {
      case 'ERC721':
        // _from, _to, _id
        walletClient?.sendTransaction({
          to: selectedCollectibleBalance.contractAddress as `0x${string}}`,
          data: new ethers.utils.Interface(ERC_721_ABI).encodeFunctionData('safeTransferFrom', [
            address,
            toAddress,
            selectedCollectibleBalance.tokenID,
          ]) as `0x${string}`
        }).catch(e => console.error('User rejected transaction', e))
        break;
      case 'ERC1155':
      default:
        // _from, _to, _ids, _amounts, _data
        walletClient?.sendTransaction({
          to: selectedCollectibleBalance.contractAddress as `0x${string}}`,
          data: new ethers.utils.Interface(ERC_1155_ABI).encodeFunctionData('safeBatchTransferFrom', [
            address,
            toAddress,
            [selectedCollectibleBalance.tokenID],
            [sendAmount.toHexString()],
            []
          ]) as `0x${string}`
        }).catch(e => console.error('User rejected transaction', e))
    }
    setOpenWalletModal && setOpenWalletModal(false)
    resetAll()
  }

  return (
    <Box as="form" gap="4" flexDirection="column" onSubmit={executeTransaction}>
      <Button label="Change Collectible" onClick={() => {
        setCollectibles([])
      }} />
      <CollectibleSelector
        imageUrl={selectedCollectibleBalance.tokenMetadata?.image}
        quantity={formattedBalance}
        name={selectedCollectibleBalance.tokenMetadata?.name}
        tokenId={selectedCollectibleBalance.tokenID}
        isSelected={false}
      />
      {selectedCollectibleBalance.contractType !== 'ERC721' && (
        <Box gap="2" flexDirection="column">
          <Text variant="small">Amount to Send</Text>
          <NumericInput
            style={{ fontSize: vars.fontSizes.normal, fontWeight: vars.fontWeights.normal }}
            name="amount"
            value={amount}
            onChange={handleChangeAmount}
            controls={
              <>
                <Button size="xs" shape="square" label="Max" onClick={handleMax} data-id="maxCoin" flexShrink="0" />
              </>
            }
          />
          {insufficientFunds && (
            <Text as="div" variant="normal" color="negative" marginTop="2">
              Insufficient collectible balance
            </Text>
          )}
        </Box>
      )}
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