// Connectors
export { apple, type AppleOptions } from './connectors/apple'
export { appleWaas, type AppleWaasOptions } from './connectors/apple/appleWaas'
export { coinbaseWallet } from './connectors/coinbaseWallet'
export { discord, type DiscordOptions } from './connectors/discord'
export { email, type EmailOptions } from './connectors/email'
export { emailWaas, type EmailWaasOptions } from './connectors/email/emailWaas'
export { facebook, type FacebookOptions } from './connectors/facebook'
export { google, type GoogleOptions } from './connectors/google'
export { googleWaas, type GoogleWaasOptions } from './connectors/google/googleWaas'
export { metamask } from './connectors/metamask'
export { mock } from './connectors/mock'
export { sequence, type SequenceOptions } from './connectors/sequence'
export { twitch, type TwitchOptions } from './connectors/twitch'
export { walletConnect } from './connectors/walletConnect'
export {
  sequenceWallet,
  sequenceWaasWallet,
  type BaseSequenceConnectorOptions,
  type BaseSequenceWaasConnectorOptions
} from './connectors/wagmiConnectors'

// Default Connectors
export { getDefaultConnectors, getDefaultWaasConnectors } from './defaultConnectors'

export type { LogoProps } from './types'
