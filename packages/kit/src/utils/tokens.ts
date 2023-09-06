export interface NativeTokenInfo {
  name: string,
  symbol: string,
  logoURI: string,
  decimals: number,
  blockExplorerUrl: string
  blockExplorerName: string
}

interface TokenInfos {
  [key: number]: NativeTokenInfo
}

export const nativeTokenInfos: TokenInfos = {
  1: {
    name: 'Ethereum',
    symbol: 'ETH',
    logoURI: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png',
    decimals: 18,
    blockExplorerName: 'Etherscan',
    blockExplorerUrl: 'https://etherscan.io'
  },
  137: {
    name: 'Polygon',
    symbol: 'MATIC',
    logoURI: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png',
    decimals: 18,
    blockExplorerName: 'Polyscan',
    blockExplorerUrl: 'https://polygonscan.com'
  },
  56: {
    name: 'BNB',
    symbol: 'BNB',
    logoURI: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png',
    decimals: 18,
    blockExplorerName: 'BscScan',
    blockExplorerUrl: 'https://bscscan.com'
  },
  43114: {
    name: 'Avalanche',
    symbol: 'AVAX',
    logoURI: 'https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png',
    decimals: 18,
    blockExplorerName: 'Snowtrace',
    blockExplorerUrl: 'https://snowtrace.io'
  },
}

export const getChainIdList = () => {
  return Object.keys(nativeTokenInfos).map(chainId => parseInt(chainId))
}

export const getNativeTokenInfoByChainId = (chainId: number) => {
  return nativeTokenInfos[chainId] || nativeTokenInfos[1]
}