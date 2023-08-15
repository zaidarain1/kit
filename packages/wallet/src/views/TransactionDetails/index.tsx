import React from 'react'
import { Transaction, TxnTransfer } from '@0xsequence/indexer'
import { Box, Button, Image, LinkIcon, Divider, Text } from '@0xsequence/design-system'
import dayjs from 'dayjs'

import { CopyButton } from '../../shared/CopyButton'
import { NetworkBadge } from '../../shared/NetworkBadge'
import { HEADER_HEIGHT } from '../../constants'
import { getNativeTokenInfoByChainId } from '../../utils'

interface TransactionDetailProps {
  transaction: Transaction
}

export const TransactionDetails = ({
  transaction
}: TransactionDetailProps) => {
  const nativeTokenInfo = getNativeTokenInfoByChainId(transaction.chainId)

  const date = dayjs(transaction.timestamp).format('ddd MMM DD YYYY, h:m:s a')

  const onClickBlockExplorer = () => {
    window.open(`${nativeTokenInfo.blockExplorerUrl}/tx/${transaction.txnHash}`, '_blank')
  }

  interface TransferProps {
    transfer: TxnTransfer
  }
  const Transfer = ({ transfer }: TransferProps) => {
    return (
      <>
        {transfer.amounts?.map((amount, index) => (
          <Box>
            transfer box
          </Box>
        ))}
      </>
    )
  }

  return (
    <Box
      padding="5"
      paddingTop="3"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="10"
      marginTop="5"
    >
      <Box marginTop="6" flexDirection="column" justifyContent="center" alignItems="center" gap="1">
        <Text fontSize="normal" fontWeight="medium">Transaction details</Text>
        <Text marginBottom="1" fontSize="small" fontWeight="medium" color="text50">{date}</Text>
        <NetworkBadge chainId={transaction.chainId} />
      </Box>
      <Box width="full" padding="4" background="backgroundSecondary" borderRadius="md">
        <Box width="full" gap="1" flexDirection="row" alignItems="center" justifyContent="flex-start">
          <Text fontSize="normal" fontWeight="medium" color="text50">Transfer</Text>
          <Image width="3" src={nativeTokenInfo.logoURI} alt="network logo" />
        </Box>
        {transaction.transfers?.map((transfer, index) => (
          <Box key={`transfer-${index}`}>
            <Transfer transfer={transfer} />
          </Box>
        ))}
      </Box>

      <Button
        onClick={onClickBlockExplorer}
        width="full"
        borderRadius="md"
        rightIcon={LinkIcon}
        label={`View on ${nativeTokenInfo.blockExplorerName}`}
      />
      <Box>
        <Box width="full" flexDirection="column" gap="2" justifyContent="center" alignItems="flex-start">
          <Divider width="full" margin="0" style={{ marginBottom: '-4px' }} />
          <Text color="text50" fontSize="normal" fontWeight="medium">
            Status
          </Text>
          <Text fontSize="normal" fontWeight="medium">
            Complete
          </Text>
        </Box>
        <Box width="full" flexDirection="column" gap="2" justifyContent="center" alignItems="flex-start">
          <Divider width="full" margin="0" style={{ marginBottom: '-4px' }} />
          <Text color="text50" fontSize="normal" fontWeight="medium">
            Transaction Hash
          </Text>
          <Text fontSize="normal" fontWeight="medium" style={{ overflowWrap: 'anywhere' }}>
            {transaction.txnHash}
          </Text>
          <CopyButton marginTop="2" buttonVariant="with-label" text={transaction.txnHash} />
        </Box>
      </Box>
    </Box>
  )
}