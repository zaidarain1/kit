import React from 'react'
import {
  AllCoins,
  AllCollectibles,
  AllCollections,
  CoinDetails,
  CollectibleDetails,
  Home,
  Receive,
  Send,
  History,
  SettingsMenu,
  SettingsCurrency,
  SettingsNetwork,
  SettingsGeneral,
  TransactionDetails,
} from '../../../views'
import { WalletHeader } from '../../WalletHeader'
import { NavigationHeader } from '../../NavigationHeader'
import { Navigation } from '../../../contexts'

export const getContent = (navigation: Navigation) => {
  const { location } = navigation

  switch (location) {
    case 'all-coins':
      return <AllCoins />
    case 'all-collections':
      return <AllCollections />
    case 'all-collectibles':
      return <AllCollectibles collectionAddress={navigation.params.collectionAddress} />
    case 'send':
      return <Send />
    case 'receive':
      return <Receive />
    case 'history':
      return <History />
    case 'settings':
      return <SettingsMenu />
    case 'settings-general':
      return <SettingsGeneral />
    case 'settings-currency':
      return <SettingsCurrency />
    case 'settings-networks':
      return <SettingsNetwork />
    case 'coin-details':
      return <CoinDetails
        contractAddress={navigation.params.contractAddress}
        chainId={navigation.params.chainId}
      />
    case 'collectible-details':
      return <CollectibleDetails
        contractAddress={navigation.params.contractAddress}
        chainId={navigation.params.chainId}
        tokenId={navigation.params.tokenId}
      />
    case 'transaction-details':
      return <TransactionDetails transaction={navigation.params.transaction} />
    case 'home':
    default:
      return <Home />
  }
}

export const getHeader = (navigation: Navigation) => {
  const { location } = navigation
  switch (location) {
    case 'settings':
      return (
        <NavigationHeader
          secondaryText="Wallet / "
          primaryText="Settings"
        />
      )
    case 'settings-general':
      return (
        <NavigationHeader
          secondaryText="Wallet / Settings / "
          primaryText="General"
        />
      )
    case 'settings-currency':
      return (
        <NavigationHeader
          secondaryText="Wallet / Settings / "
          primaryText="Currency"
        />
      )
    case 'settings-networks':
      return (
        <NavigationHeader
          secondaryText="Wallet / Settings / "
            primaryText="Networks"
        />
      )
    case 'receive':
      return (
        <NavigationHeader
          secondaryText="Wallet / "
            primaryText="Receive"
        />
      )
    case 'history':
      return (
        <NavigationHeader
          secondaryText="Wallet / "
            primaryText="History"
        />
      )
    case 'coin-details':
        return <WalletHeader />
    case 'collectible-details':
      return <WalletHeader />
    case 'transaction-details':
      return (
        <NavigationHeader
          secondaryText=""
            primaryText=""
        />
      )
    case 'all-coins':
    case 'all-collections':
    case 'all-collectibles':
    case 'send':
      
    case 'home':
    default:
      return <WalletHeader />
  }
}