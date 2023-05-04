import { TokenBalance, ContractType } from '@0xsequence/indexer'
import { ethers } from 'ethers'

import { getNetworkConfigAndClients } from '../utils/clients'

export interface GetTokenBalancesArgs {
  accountAddress: string,
  chainId: number
}

export const getNativeToken = async ({ accountAddress, chainId }: GetTokenBalancesArgs) => {
  try {
    const { indexerClient } = await getNetworkConfigAndClients(chainId) 

    const res = await indexerClient.getEtherBalance({ accountAddress })
  
    const tokenBalance: TokenBalance = {
      chainId,
      contractAddress: ethers.constants.AddressZero,
      accountAddress,
      balance: res?.balance.balanceWei || '0',
      contractType: ContractType.UNKNOWN,
      blockHash: '',
      blockNumber: 0,
      tokenID: '',
    }
    return [tokenBalance]
  } catch(e) {
    console.error(e)
    return []
  }
}

export const getTokenBalances = async ({ accountAddress, chainId }: GetTokenBalancesArgs) => {
  try {
    const { indexerClient } = await getNetworkConfigAndClients(chainId) 

    const res = await indexerClient.getTokenBalances({ accountAddress, includeMetadata: true})
  
    return res?.balances || []
  } catch(e) {
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
          chainId,
        })
      ])
    ).flat()
    return tokenBalances
  } catch(e) {
    console.error(e)
    return []
  }
}