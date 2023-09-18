import React from 'react'
import { createGenericContext } from '../utils'
import { RecommendedAsset } from '../components/KitProvider'

type WalletConfigContext = {
  setRecommendedAssets: React.Dispatch<React.SetStateAction<RecommendedAsset[]>>
  recommendedAssets: RecommendedAsset[],
}

export const [useWalletConfigContext, WalletConfigContextProvider] = createGenericContext<WalletConfigContext>()
