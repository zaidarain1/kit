import React from 'react'
import { useOpenConnectModal, useTheme } from '@0xsequence/kit-core'
import { useOpenWalletModal } from '@0xsequence/kit-wallet'
import { useCheckoutModal } from '@0xsequence/kit-checkout'
import { useDisconnect, useAccount, useWalletClient, usePublicClient } from 'wagmi'
import {
  Box,
  Button,
  Card,
  GradientAvatar,
  Text,
  Image,
  SunIcon,
  MoonIcon,
  SignoutIcon
} from '@0xsequence/design-system'

import { bottomPageLinks, messageToSign, socialLinks } from '../constants'
import { formatAddress, getCheckoutSettings } from '../utils'
import *  as sharedStyles from '../shared/styles.css'

function Homepage() {
  const { theme, setTheme } = useTheme()
  const { address, connector, isConnected } = useAccount()
  const { setOpenConnectModal } = useOpenConnectModal()
  const { setOpenWalletModal } = useOpenWalletModal()
  const { triggerCheckout } = useCheckoutModal()
  const { disconnect } = useDisconnect()
  const { data: walletClient } = useWalletClient()
  const publicClient = usePublicClient()

  const signMessage = async () => {
    if (!walletClient) {
      return
    }

    try {
      const message = messageToSign
  
      // sign
      const sig = await walletClient.signMessage({
        message
      })
      console.log('signature:', sig)

      const [account] = await walletClient.getAddresses()
  
      const isValid = await publicClient.verifyMessage({
        address: account,
        message,
        signature: sig
      })

      console.log('isValid?', isValid)
    } catch (e) {
      console.error(e)
    }
  }

  const onClickChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }


  const HeaderContent = () => {
    if (!isConnected) {
      return (
        <Box padding="5" justifyContent="flex-end">
          <Box flexDirection="row" alignItems="center" justifyContent="center" gap="3">
            <SwitchThemeButton />
          </Box>
        </Box>
      )
    }

    return (
      <Box padding="5" justifyContent="space-between">
        <Box flexDirection="row" alignItems="center" justifyContent="center" gap="3">
          <Image style={{ width: '36px' }} src='/kit-logo.svg' />
          <Image
            style={{
              width: '24px',
              filter: theme === 'dark' ? 'invert(0)' : 'invert(1)'
            }}
            src='/kit-logo-text.svg'
          />
        </Box>
        <Box>
          <Box flexDirection="column">
            <Box flexDirection="row" gap="2" justifyContent="flex-end" alignItems="center">
              <Box style={{ marginRight: '-12px' }}>
                <SwitchThemeButton />
              </Box>
              {/* <GradientAvatar address={address || ''} style={{ width: '20px' }} /> */}
              <Text fontWeight="medium" fontSize="normal" color="text100">{formatAddress(address || '')}</Text>
            </Box>
            <Box alignItems="center" justifyContent="flex-end" flexDirection="row">
              <Text fontWeight="medium" fontSize="normal" color="text50">
                {connector?.name}
              </Text>
            </Box>
          </Box>          
        </Box>
      </Box>
    )
  }

  interface ClickableCardProps {
    title: string,
    description: string,
    onClick: () => void
  }

  const ClickableCard = ({
    title, description, onClick
  }: ClickableCardProps) => {
    return (
      <Card style={{ width: '332px' }} clickable onClick={onClick}>
        <Text lineHeight="5" fontSize="normal" fontWeight="bold">
          {title}
        </Text>
        <Box marginTop="1">
          <Text fontWeight="medium" lineHeight="5" color="text50" fontSize="normal" >
            {description}
          </Text>
        </Box>
      </Card>
    )
  }

  const onClickConnect = () => {
    setOpenConnectModal(true)
  }

  const onClickLinkUrl = (url: string) => {
    window.open(url)
  }

  const onClickCheckout = () => {
    triggerCheckout(getCheckoutSettings(address))
  }


  const SwitchThemeButton = () => {
    return (
      <Button variant="base" onClick={onClickChangeTheme} leftIcon={theme === 'dark' ? SunIcon : MoonIcon} />
    )
  }

  return (
    <Box background="backgroundPrimary">
      <Box style={{ height: '72px' }} position="fixed" width="full" top="0">
        <HeaderContent />
      </Box>
      <Box style={{  height: '100vh'}} flexDirection="column" justifyContent="center" alignItems="center">
        {isConnected ? (
          <Box flexDirection="column" gap="4">
            <Box flexDirection="column" gap="2">
              <Text color="text50" fontSize="small" fontWeight="medium">Demos</Text>
              <ClickableCard
                title="Embedded wallet"
                description="Connect a Sequence wallet to view, swap, send, and receive collections"
                onClick={() => setOpenWalletModal(true)}
              />
              <ClickableCard
                title="Checkout"
                description="Checkout screen before placing a purchase on coins or collections"
                onClick={onClickCheckout}
              />
              <ClickableCard
                title="Sign transaction"
                description="Sign transaction screen before placing a purchase on coins or collections"
                onClick={signMessage}
              />
            </Box>
            <Box width="full" gap="2" flexDirection="row" justifyContent="flex-end" >
              <Button onClick={() => disconnect()} leftIcon={SignoutIcon} label="Sign out" />
            </Box>
          </Box>
      ) : (
          <Box>
            <Box flexDirection="column" alignItems="center" justifyContent="center" gap="5">
              <Box flexDirection="row" alignItems="center" justifyContent="center" gap="3">
                <Image style={{ width: '48px' }} src='/kit-logo.svg' />
                <Image
                  style={{
                    width: '32px',
                    filter: theme === 'dark' ? 'invert(0)' : 'invert(1)'
                  }}
                  src='/kit-logo-text.svg' />
              </Box>
              <Box gap="2" flexDirection="row" alignItems="center">
                <Button onClick={onClickConnect} variant="feature" label="Connect" />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      <Box padding="5" style={{ height: '60px' }} position="fixed" bottom="0" width="full" justifyContent="space-between">
        <Box flexDirection="row" gap="4">
          {bottomPageLinks.map((link, index) => (
            <Box onClick={() => onClickLinkUrl(link.url)} className={sharedStyles.clickable} key={index} gap="4">
              <Text fontWeight="normal" fontSize="small" color="text50">{link.label}</Text>
            </Box>
          ))}
        </Box>
        <Box gap="4" justifyContent="center" alignItems="center">
          {socialLinks.map(socialLink => {
            return (
              <Box
                className={sharedStyles.clickable}
                onClick={() => window.open(socialLink.url)}
              >
                <Image
                  height="3"
                  src={socialLink.icon}
                  alt={socialLink.id}
                  style={{
                    filter: theme === 'dark' ? 'invert(0)' : 'invert(1)'
                  }}
                />
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Homepage;
