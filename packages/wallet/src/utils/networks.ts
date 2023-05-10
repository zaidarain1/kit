import { ChainId } from '@0xsequence/network'

export const getChainColor = (
  chainId: number,
  mode: 'dark' | 'light' = 'light'
) => {
  switch (chainId) {
    case ChainId.MAINNET:
      return mode === 'light' ? '#0087FF' : '#C6D6FE'
    case ChainId.POLYGON:
      return mode === 'light' ? '#8E4DC5' : '#8564E6'
    case ChainId.ARBITRUM:
      return mode === 'light' ? '#52A7E6' : '#52A7E6'
    case ChainId.OPTIMISM:
      return mode === 'light' ? '#DB3132' : '#DB3132'
    case ChainId.BSC:
      return mode === 'light' ? '#CB9C1D' : '#EEB445'
    case ChainId.AVALANCHE:
      return mode === 'light' ? '#E84142' : '#E84142'
    case ChainId.GNOSIS:
      return mode === 'light' ? '#00193C' : '#D8E8FF'
    case ChainId.GOERLI:
      return mode === 'light' ? '#A77A00' : '#FFA700'
    case ChainId.POLYGON_MUMBAI:
      return mode === 'light' ? '#D68828' : '#FFA700'
    default:
      return mode === 'light' ? '#1E4097' : '#C6D6FE'
  }
}

export const getChainBGColor = (
  chainId: number,
  mode: 'dark' | 'light' = 'light'
) => {
  switch (chainId) {
    case ChainId.MAINNET: // #C6D6FE
      return mode === 'light' ? '#E7EDFF' : '#002546'
    case ChainId.POLYGON:
      return mode === 'light' ? '#F9F1FE' : '#2D1654'
    case ChainId.ARBITRUM:
      return mode === 'light' ? '#EDF7FF' : '#0C3754'
    case ChainId.OPTIMISM:
      return mode === 'light' ? '#FFEAE9' : '#390B0C'
    case ChainId.BSC:
      return mode === 'light' ? '#FFE8AB' : '#554018'
    case ChainId.AVALANCHE:
      return mode === 'light' ? '#FBDFDF' : '#390B0C'
    case ChainId.GNOSIS:
      return mode === 'light' ? '#D8E8FF' : '#00193C'
    case ChainId.GOERLI:
      return mode === 'light' ? '#FFD871' : '#554018'
    case ChainId.POLYGON_MUMBAI:
      return mode === 'light' ? '#FFE8CD' : '#554018'
    default:
      return mode === 'light' ? '#C0D1FF' : '#002546'
  }
}