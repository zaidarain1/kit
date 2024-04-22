import { Token, TokenPrice, GetCoinPricesReturn } from '@0xsequence/api'
import { getNetworkConfigAndClients } from '@0xsequence/kit'
import { TokenBalance, ContractType } from '@0xsequence/indexer'
import { GetContractInfoArgs, ContractInfo, TokenMetadata } from '@0xsequence/metadata'
import { ethers } from 'ethers'

import { SardineCheckout } from '..'
import { ChainId, networks } from '@0xsequence/network'

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

export interface GetCollectionBalanceArgs {
  accountAddress: string
  chainId: number
  collectionAddress: string
  verifiedOnly?: boolean
}

export const fetchCollectionBalance = async ({
  accountAddress,
  chainId,
  collectionAddress,
  verifiedOnly
}: GetCollectionBalanceArgs) => {
  try {
    const { indexerClient } = getNetworkConfigAndClients(chainId)

    const res = await indexerClient.getTokenBalances({
      accountAddress,
      includeMetadata: true,
      contractAddress: collectionAddress,
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

export interface GetCoinPricesArgs {
  tokens: Token[]
}

export const getCoinPrices = async ({ tokens }: GetCoinPricesArgs): Promise<TokenPrice[] | undefined> => {
  try {
    if (tokens.length === 0) return []
    const chainId = tokens[0].chainId

    const { apiClient } = getNetworkConfigAndClients(chainId)

    const res: GetCoinPricesReturn = await apiClient.getCoinPrices({
      tokens
    })

    return res?.tokenPrices || []
  } catch (e) {
    console.error(e)
    return
  }
}

export interface GetTokenMetadataArgs {
  chainId: number
  tokenId: string
  contractAddress: string
}

export const fetchTokenMetadata = async ({ chainId, tokenId, contractAddress }: GetTokenMetadataArgs): Promise<TokenMetadata> => {
  const { metadataClient } = getNetworkConfigAndClients(chainId)

  const response = await metadataClient.getTokenMetadata({
    chainID: String(chainId),
    contractAddress,
    tokenIDs: [tokenId]
  })

  return response.tokenMetadata[0]
}

export const fetchContractInfo = async ({ chainID, contractAddress }: GetContractInfoArgs): Promise<ContractInfo> => {
  const { metadataClient } = getNetworkConfigAndClients(chainID)

  const response = await metadataClient.getContractInfo({
    chainID,
    contractAddress
  })

  return response.contractInfo
}

export const fetchSardineClientToken = async (): Promise<string> => {
  const { apiClient } = getNetworkConfigAndClients(1)
  const res = await apiClient.getSardineClientToken()

  return res.token
}

export const createSardineOrder = async (order: SardineCheckout, authToken: string, tokenMetadata?: TokenMetadata): Promise<any> => {
  const response = await fetch('https://api.sardine.ai/v1/auth/client-tokens', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${authToken}`
    },
    body: JSON.stringify({
      referenceId: 'test-0.24678085734dwedwedwed0dwedwedwed4dweddweddwedwedwfwrferfwedwed6884', // change or remove reference id?
      expiresIn: 3600,
      paymentMethodTypeConfig: {
        enabled: ['us_debit', 'us_credit', 'international_debit', 'international_credit', 'ach'],
        default: order.defaultPaymentMethodType
      },
      nft: {
        name: tokenMetadata?.name || 'Unknown',
        imageUrl: tokenMetadata?.image || '',
        network: networks[order.chainId as ChainId].name,
        recipientAddress: order.recipientAddress,
        platform: 'horizon',
        blockchainNftId: order.blockchainNftId,
        contractAddress: order.contractAddress,
        executionType: 'smart_contract',
        quantity: Number(order.quantity),
        decimals: Number(order.decimals)
      }
    })
  })

  const json = await response.json()

  return json
}

export const fetchSardineOrderStatus = async (authToken: string, orderId: string) => {
  const response = await fetch(`https://api.sardine.ai/v1/orders/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${authToken}`
    }
  })

  const json = await response.json()
  console.log('json:', json)
  return json
}
