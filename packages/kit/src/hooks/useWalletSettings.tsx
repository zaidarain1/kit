import React from 'react'
import { useWalletConfigContext } from '../contexts/WalletSettings'

export const useWalletSettings = () => {
  const { setRecommendedAssets, recommendedAssets } = useWalletConfigContext()

  return {
    recommendedAssets,
    setRecommendedAssets,
  }
}