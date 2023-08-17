import React from 'react'
import { ethers } from 'ethers'
import { Box, Image, Text, ChevronRightIcon } from '@0xsequence/design-system'
import { TokenBalance } from '@0xsequence/indexer'

import { DefaultIcon } from '../../../shared/DefaultIcon'
import { useNavigation } from '../../../hooks'
import {
  compareAddress,
  formatDisplay,
  getNativeTokenInfoByChainId
} from '../../../utils'

import * as sharedStyles from '../../../shared/styles.css'
import { SendCollectibles } from '~/shared/Send'

interface BalanceItemProps {
  balance: TokenBalance
}

export const BalanceItem = ({
  balance
}: BalanceItemProps) => {
  const { setNavigation } = useNavigation()
  const isNativeToken = compareAddress(balance.contractAddress, ethers.constants.AddressZero) 
  const nativeTokenInfo = getNativeTokenInfoByChainId(balance.chainId)
  const logoURI = isNativeToken ? nativeTokenInfo.logoURI : balance?.contractInfo?.logoURI
  const tokenName = isNativeToken ? nativeTokenInfo.name : balance?.contractInfo?.name || 'Unknown'
  
  const getQuantity = () => {
    if (balance.contractType === 'ERC721' || balance.contractType === 'ERC1155') {
      return (balance.balance)
    }
    const decimals = isNativeToken  ? nativeTokenInfo.decimals : balance?.contractInfo?.decimals
    const bal = ethers.utils.formatUnits( balance.balance, decimals || 0)
    const displayBalance = formatDisplay(bal)
    const symbol = isNativeToken ? nativeTokenInfo.symbol : balance?.contractInfo?.symbol

    return `${displayBalance} ${symbol}`
  }

  const onClick = () => {
    const isCollection = balance.contractType === 'ERC721' || balance.contractType === 'ERC1155'
    if (isCollection) {
      setNavigation({
        location: 'collection-details',
        params: {
          contractAddress: balance.contractAddress,
          chainId: balance.chainId,
        }
      })
    } else {
      setNavigation({
        location: 'coin-details',
        params: {
          contractAddress: balance.contractAddress,
          chainId: balance.chainId
        }
      })
    }
  }

  return (
    <Box
      key={balance.contractAddress}
      onClick={onClick}
      width="full"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      className={sharedStyles.clickable}
    >
      <Box gap="3" flexDirection="row" alignItems="center" justifyContent="center">
        {logoURI ? (
          <Image
            src={logoURI}
            alt="logo"
            borderRadius="circle"
            style={{ width: '30px', height: "30px" }}
          />
        ) : (
          <DefaultIcon size={30} />
        )}
        <Box gap="1" flexDirection="row" alignItems="center" justifyContent="center">
          <Text
            color="text100"
            fontWeight="bold"
            fontSize="normal"
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              maxWidth: '250px',
              // @ts-ignore-next-line
              textWrap: 'nowrap'
            }}
          >
            {tokenName}
          </Text>
          <Image src={nativeTokenInfo.logoURI} alt="network logo" style={{ width: '12px', height: '12px' }} />
        </Box>
      </Box>
      <Box flexDirection="row" alignItems="center" justifyContent="center" gap="1">
        <Text color="text50" fontWeight="bold" fontSize="normal">
          {getQuantity()}
        </Text>
        <ChevronRightIcon color="text50" />
      </Box>
    </Box>
  )
}