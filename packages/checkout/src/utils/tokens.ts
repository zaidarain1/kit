export interface NativeTokenInfo {
  name: string,
  symbol: string,
  logoURI: string,
  decimals: number
}

export const getNativeTokenInfoByChainId = (chainId: number) => {
  interface TokenInfos {
    [key: number]: NativeTokenInfo
  }

  const tokenInfos: TokenInfos = {
    1: {
      name: 'Ethereum',
      symbol: 'ETH',
      logoURI: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png',
      decimals: 18,
    },
    137: {
      name: 'Polygon',
      symbol: 'MATIC',
      logoURI: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png',
      decimals: 18,
    },
    56: {
      name: 'BNB',
      symbol: 'BNB',
      logoURI: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png',
      decimals: 18,
    },
    43114: {
      name: 'Avalanche',
      symbol: 'AVAX',
      logoURI: 'https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png',
      decimals: 18,
    },
  }

  return tokenInfos[chainId] || tokenInfos[1]
}