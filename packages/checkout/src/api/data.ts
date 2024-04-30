import { getNetworkConfigAndClients } from '@0xsequence/kit'
import { TokenBalance, ContractType } from '@0xsequence/indexer'
import { ethers } from 'ethers'

import { getPaperNetworkName } from '../utils'

export interface GetTokenBalancesArgs {
  accountAddress: string
  chainId: number
  verifiedOnly?: boolean
}

export const getNativeToken = async ({ accountAddress, chainId }: GetTokenBalancesArgs) => {
  try {
    const { indexerClient } = getNetworkConfigAndClients(chainId)

    const res = await indexerClient.getEtherBalance({ accountAddress })

    const tokenBalance: TokenBalance = {
      chainId,
      contractAddress: ethers.constants.AddressZero,
      accountAddress,
      balance: res?.balance.balanceWei || '0',
      contractType: ContractType.UNKNOWN,
      blockHash: '',
      blockNumber: 0,
      tokenID: ''
    }
    return [tokenBalance]
  } catch (e) {
    console.error(e)
    return []
  }
}

export const getTokenBalances = async ({ accountAddress, chainId, verifiedOnly }: GetTokenBalancesArgs) => {
  try {
    const { indexerClient } = getNetworkConfigAndClients(chainId)

    const res = await indexerClient.getTokenBalances({
      accountAddress,
      includeMetadata: true,
      metadataOptions: {
        verifiedOnly: verifiedOnly ?? true
      }
    })

    return res?.balances || []
  } catch (e) {
    console.error(e)
    return []
  }
}

export const fetchBalances = async ({ accountAddress, chainId }: GetTokenBalancesArgs) => {
  try {
    const tokenBalances = (
      await Promise.all([
        getNativeToken({
          accountAddress,
          chainId
        }),
        getTokenBalances({
          accountAddress,
          chainId
        })
      ])
    ).flat()
    return tokenBalances
  } catch (e) {
    console.error(e)
    return []
  }
}

export interface FetchPaperSecretArgs {
  chainId: number
  email: string
  abi: string
  contractAddress: string
  recipientAddress: string
  receiptTitle: string
  collectionContractAddress?: string
  methodArguments: MethodArguments
  currency: string
  currencyAmount: string
  methodName: string
}

export interface MethodArguments {
  [key: string]: any
}

export const fetchPaperSecret = async ({
  chainId,
  email,
  contractAddress,
  abi,
  receiptTitle,
  collectionContractAddress,
  methodArguments,
  currency,
  currencyAmount,
  methodName,
  recipientAddress
}: FetchPaperSecretArgs) => {
  const { network, apiClient } = await getNetworkConfigAndClients(chainId)

  // @ts-ignore-next-line
  const chainName = getPaperNetworkName(network)

  const paramsJson = JSON.stringify({
    title: receiptTitle,
    email,
    limitPerTransaction: 1,
    quantity: 1,
    mintMethod: {
      args: methodArguments,
      payment: {
        currency,
        value: `${currencyAmount} * $QUANTITY`
      },
      name: methodName
    },
    walletAddress: recipientAddress,
    ...(collectionContractAddress
      ? {
          contractArgs: {
            collectionContractAddress
          }
        }
      : {})
  })

  const { secret } = await apiClient.paperSessionSecret2({
    chainName,
    contractAddress,
    abi,
    paramsJson
  })

  return secret
}
