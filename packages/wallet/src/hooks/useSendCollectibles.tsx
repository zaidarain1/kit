import { useContext } from 'react'
import { SendCollectiblesContext } from '../contexts/SendCollectibles'

export const useSendCollectibles = () => {
  const {
    collectibles,
    toAddress,
    collection,
    setToAddress,
    setCollectibles,
    setCollection
  } = useContext(SendCollectiblesContext)

  const resetAll = () => {
    setCollectibles && setCollectibles([])
    setToAddress && setToAddress('')
    setCollection && setCollection(undefined)
  }

  return {
    collectibles,
    toAddress,
    collection,
    setCollectibles: setCollectibles || (() => {}),
    setToAddress: setToAddress || (() => {}),
    setCollection: setCollection || (() => {}),
    resetAll,
  }
}