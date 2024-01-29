import { sequence } from '0xsequence'
import { LocalStorageKey, EthAuthSettings } from '@0xsequence/kit'
import { ConnectOptions } from '@0xsequence/provider'

import {
  createWalletClient,
  custom,
  UserRejectedRequestError
} from 'viem'

import {
  Connector,
  ConnectorData,
  Chain,
} from 'wagmi'

export interface BaseSequenceConnectorOptions {
  projectAccessKey: string,
  defaultNetwork?: sequence.network.ChainIdLike,
  connect?: ConnectOptions
}

export class BaseSequenceConnector extends Connector<sequence.provider.SequenceProvider, BaseSequenceConnectorOptions | undefined> {
  id = 'sequence'
  name = 'Sequence'

  ready = true

  provider: sequence.provider.SequenceProvider

  constructor({ chains, options }: {
    chains?: Chain[],
    options: BaseSequenceConnectorOptions
  }) {
    super({ chains, options })

    const signInOptions = options?.connect?.settings?.signInOptions || []
    const signInWith = options?.connect?.settings?.signInWith
    const signInWithEmail = options?.connect?.settings?.signInWithEmail
    
    // If there are no sign in options
    // Then it must mean we are connecting with email
    if (signInWithEmail) {
      this.id = 'email'
      this.name = 'Email'
    } else if (signInWith) {
      this.id = signInWith
      this.name = `${signInWith[0].toUpperCase()}${signInWith.slice(1)}` 
    } else if (signInOptions.length > 0) {
      const id = signInOptions[0]
      const name = `${id[0].toUpperCase()}${id.slice(1)}` 
      this.id = id
      this.name = name
    }

    this.provider = sequence.initWallet(options.projectAccessKey, {
      defaultNetwork: options?.defaultNetwork,
      transports: {
        walletAppURL: 'https://sequence.app',
      },
      defaultEIP6492: true,
      analytics: false,
    })

    this.provider.on('chainChanged', (chainIdHex: string) => {
      // @ts-ignore-next-line
      this?.emit('change', { chain: { id: normalizeChainId(chainIdHex), unsupported: false } })
    })

    this.provider.on('accountsChanged', (accounts: string[]) => {
      // @ts-ignore-next-line
      this?.emit('accountsChanged', this.onAccountsChanged(accounts))
    })

    this.provider.on('disconnect', () => {
      this.onDisconnect()
    })
  }

  async connect(): Promise<Required<ConnectorData>> {
    if (!this.provider.isConnected()) {
      // @ts-ignore-next-line
      this?.emit('message', { type: 'connecting' })
      // inject the signInOptions into the connect options
      const connectOptions = this.options?.connect

      const localStorageTheme = localStorage.getItem(LocalStorageKey.Theme)

      const ethAuthSettingsRaw = localStorage.getItem(LocalStorageKey.EthAuthSettings)
      const parseEthAuthSettings = ethAuthSettingsRaw ? JSON.parse(ethAuthSettingsRaw) : {} as EthAuthSettings

      const connectOptionsWithTheme = {
        authorize: true,
        ...parseEthAuthSettings,
        ...connectOptions,
        settings: {
          theme: localStorageTheme || 'dark',
          ...connectOptions?.settings,
        }
      }
      const e = await this.provider.connect(connectOptionsWithTheme)

      if (e.error) {
        throw new UserRejectedRequestError(new Error(e.error))
      }
      if (!e.connected) {
        throw new UserRejectedRequestError(new Error('Wallet connection rejected'))
      }

      const proofString = e.proof?.proofString
      const proofTypedData = e.proof?.typedData
      if (proofString) {
        const jsonEthAuthProof = JSON.stringify({
          proofString,
          typedData: proofTypedData,
        })

        localStorage.setItem(LocalStorageKey.EthAuthProof, jsonEthAuthProof)
      }
    }

    const account = await this.getAccount()

    return {
      account,
      chain: {
        id: this.provider.getChainId(),
        unsupported: this.isChainUnsupported(this.provider.getChainId()),
      },
    }
  }

  async getWalletClient({ chainId }: { chainId?: number } = {}): Promise<any> {
    const chain = this.chains.find((x) => x.id === chainId)

    return createWalletClient({
      chain,
      account: await this.getAccount(),
      transport: custom(this.provider),
    })
  }

  protected onChainChanged(chain: string | number): void {
    this.provider.setDefaultChainId(normalizeChainId(chain))
  }

  async switchChain(chainId: number): Promise<Chain> {
    if (this.isChainUnsupported(chainId)) {
      throw new Error('Unsupported chain')
    }

    this.provider.setDefaultChainId(chainId)
    return this.chains.find((x) => x.id === chainId) as Chain
  }

  async disconnect() {
    localStorage.removeItem(LocalStorageKey.EthAuthProof)
    this.provider.disconnect()
  }

  getAccount() {
    return this.provider.getSigner().getAddress() as Promise<`0x${string}`>
  }

  async getChainId() {
    return this.provider.getChainId()
  }

  async getProvider() {
    return this.provider
  }

  async getSigner() {
    return this.provider.getSigner()
  }

  async isAuthorized() {
    try {
      const account = await this.getAccount()
      return !!account
    } catch {
      return false
    }
  }

  protected onAccountsChanged = (accounts: string[]) => {
    return { account: accounts[0] }
  }

  protected onDisconnect = () => {
    // @ts-ignore-next-line
    this?.emit('disconnect')
  }

  isChainUnsupported(chainId: number): boolean {
    // @ts-ignore-next-line
    return this.provider.networks.findIndex((x) => x.chainId === chainId) === -1
  }
}



const normalizeChainId = (chainId: string | number | bigint | { chainId: string }): number => {
  if (typeof chainId === 'object') return normalizeChainId(chainId.chainId)
  if (typeof chainId === 'string') return Number.parseInt(chainId, chainId.trim().substring(0, 2) === '0x' ? 16 : 10)
  if (typeof chainId === 'bigint') return Number(chainId)
  return chainId
}
