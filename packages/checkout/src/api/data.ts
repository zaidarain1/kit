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

export const fetchSardineClientToken = async (order: SardineCheckout, isDev: boolean, tokenMetadata?: TokenMetadata): Promise<FetchSardineClientTokenReturn> => {
  const { apiClient } = getNetworkConfigAndClients(1)

  const randomNumber = Math.floor(Math.random() * 1000000)
  const timestamp = new Date().getTime()
  const referenceId = `sequence-kit-${randomNumber}-${timestamp}-${order.recipientAddress}-${networks[order.chainId as ChainId].name}-${order.contractAddress}-${order.contractAddress}-${order.recipientAddress}`


  // Test credentials: https://docs.sardine.ai/docs/integrate-payments/nft-checkout-testing-credentials
  const projectAccessKey = isDev ? '17xhjK4yjRf1fr0am8kgKfICAAAAAAAAA' : localStorage.getItem(LocalStorageKey.ProjectAccessKey) || undefined
  const url = isDev ? 'https://dev-api.sequence.app/rpc/API/GetSardineNFTCheckoutToken' : 'https://api.sequence.app/rpc/API/GetSardineNFTCheckoutToken'

  const res = await fetch(url, {
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

  const { resp: { orderId, token } } = await res.json()

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

export const fetchSardineOrderStatus = async (orderId: string, isDev: boolean) => {
  // Test credentials: https://docs.sardine.ai/docs/integrate-payments/nft-checkout-testing-credentials
  const projectAccessKey = isDev ? '17xhjK4yjRf1fr0am8kgKfICAAAAAAAAA' :  localStorage.getItem(LocalStorageKey.ProjectAccessKey) || undefined
  const url = isDev ? 'https://dev-api.sequence.app/rpc/API/GetSardineNFTCheckoutOrderStatus' : 'https://api.sequence.app/rpc/API/GetSardineNFTCheckoutOrderStatus'

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Key': `${projectAccessKey}`
    },
    body: JSON.stringify({
      orderId,
    })
  })

  const json = await response.json()
  console.log('json:', json)
  return json
}

export interface Country {
  code: string,
}

export const fetchSupportedCountryCodes = async (): Promise<Country[]> => {
  // Can also be fetches from sardine api
  const supportedCountries = [
    'AL',
    'AO',
    'AT',
    'BB',
    'BE',
    'BZ',
    'BJ',
    'BO',
    'BR',
    'BG',
    'KH',
    'KY',
    'CL',
    'CO',
    'KM',
    'CR',
    'HR',
    'CY',
    'CZ',
    'DK',
    'DM',
    'DO',
    'EC',
    'EG',
    'SV',
    'GQ',
    'EE',
    'FO',
    'FI',
    'FR',
    'GF',
    'DE',
    'GR',
    'GN',
    'GW',
    'GY',
    'HT',
    'HN',
    'HU',
    'IS',
    'ID',
    'IE',
    'IL',
    'IT',
    'JM',
    'JP',
    'KG',
    'LA',
    'LV',
    'LI',
    'LT',
    'LU',
    'MG',
    'MY',
    'MV',
    'MT',
    'MR',
    'MX',
    'MN',
    'MZ',
    'NL',
    'NO',
    'OM',
    'PA',
    'PY',
    'PE',
    'PH',
    'PL',
    'PT',
    'RO',
    'KN',
    'MF',
    'SA',
    'SC',
    'SG',
    'SK',
    'SI',
    'KR',
    'ES',
    'LK',
    'SE',
    'CH',
    'TZ',
    'TH',
    'TT',
    'TR',
    'AE',
    'GB',
    'UY',
    'UZ',
    'VU',
    'VN',
  ]

  return supportedCountries.map(countryCode => ({ code: countryCode }))
}