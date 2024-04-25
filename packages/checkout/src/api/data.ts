import { Token, TokenPrice, GetCoinPricesReturn } from '@0xsequence/api'
import { getNetworkConfigAndClients, LocalStorageKey } from '@0xsequence/kit'
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

export interface FetchSardineClientTokenReturn {
  token: string,
  orderId: string,
}

export const fetchSardineClientToken = async (order: SardineCheckout, tokenMetadata?: TokenMetadata): Promise<FetchSardineClientTokenReturn> => {
  const { apiClient } = getNetworkConfigAndClients(1)

  const randomNumber = Math.floor(Math.random() * 1000000)
  const timestamp = new Date().getTime()
  const referenceId = `sequence-kit-${randomNumber}-${timestamp}-${order.recipientAddress}-${networks[order.chainId as ChainId].name}-${order.contractAddress}-${order.contractAddress}-${order.recipientAddress}`

  const projectAccessKey = localStorage.getItem(LocalStorageKey.ProjectAccessKey) || undefined

  const res = await fetch('https://api.sequence.app/rpc/API/GetSardineNFTCheckoutToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Key': `${projectAccessKey || ''}`
    },
    body: JSON.stringify(
      { 
        params: {
          referenceId,
          expiresIn: 3600,
          paymentMethodTypeConfig: {
            enabled: ['us_debit', 'us_credit', 'international_debit', 'international_credit', 'ach'],
            default: order.defaultPaymentMethodType
          },
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
      }
    )
  })

  const { orderId, token } = await res.json()

  // const res = await apiClient.getSardineNFTCheckoutToken({
  //   referenceId,
  //   expiresIn: 3600,
  //   paymentMethodTypeConfig: {
  //     enabled: ['us_debit', 'us_credit', 'international_debit', 'international_credit', 'ach'],
  //     default: order.defaultPaymentMethodType
  //   },
  //   nft: {
  //     name: tokenMetadata?.name || 'Unknown',
  //     imageUrl: tokenMetadata?.image || '',
  //     network: networks[order.chainId as ChainId].name,
  //     recipientAddress: order.recipientAddress,
  //     platform: 'horizon',
  //     blockchainNftId: order.blockchainNftId,
  //     contractAddress: order.contractAddress,
  //     executionType: 'smart_contract',
  //     quantity: Number(order.quantity),
  //     decimals: Number(order.decimals)
  //   }
  // })

  return ({
    token,
    orderId,
  })
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
