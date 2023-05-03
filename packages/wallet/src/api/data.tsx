export const test = 1

export interface Coin {
  chainId: number
  contractAddress: string,
  accountAddress: string,
  balance: string,
}

export const fetchCoins = async () => {
  // fetchAll = async (accountAddress?: string, chainId?: number): Promise<void> => {
  //   accountAddress ||= this.store.get(WalletStore).accountAddress.get()

  //   // All token balances
  //   const tokenBalances = (
  //     await Promise.all([
  //       this.fetchNativeTokenBalances(accountAddress, chainId),
  //       this.fetchTokenBalances(accountAddress, chainId)
  //     ])
  //   ).flat()
  //   const contractStore = this.store.get(ContractStore)

  //   await contractStore.fetchContractsFromTokenBalances(tokenBalances)

  //   this.tokenBalances.set(tokenBalances)

  //   this.firstFetch.set(true)
  // }
}