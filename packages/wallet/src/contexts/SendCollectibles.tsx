import React, { createContext } from 'react'
import { TokenBalance } from '@0xsequence/indexer'


export interface CollectiblesToSend {
  tokenId: string,
  amount: string,
}

export interface CollectionToSend {
  collectionAddress: string,
  chainId: number,
}

type SendCollectiblesContext = {
  collectibles: CollectiblesToSend[],
  setCollectibles?: React.Dispatch<React.SetStateAction<CollectiblesToSend[]>>,
  toAddress: string,
  setToAddress?: React.Dispatch<React.SetStateAction<string>>,
  collection?: CollectionToSend,
  setCollection?: React.Dispatch<React.SetStateAction<CollectionToSend | undefined>>,
}

export const SendCollectiblesContext = createContext<SendCollectiblesContext>({
  toAddress: '',
  collectibles: []
})