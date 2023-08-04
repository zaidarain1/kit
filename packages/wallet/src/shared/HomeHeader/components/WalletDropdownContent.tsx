import React, { forwardRef } from 'react'
import { useDisconnect, useAccount } from 'wagmi'

import {
  Box,
  Button,
  IconButton,
  CloseIcon,
  GradientAvatar,
  Text,
  QrCodeIcon,
  SettingsIcon,
  SignoutIcon,
  TransactionIcon,
  vars
} from '@0xsequence/design-system'

import { useOpenWalletModal } from '../../../hooks/useOpenWalletModal'
import { CopyButton } from '../../../shared/CopyButton'
import { formatAddress } from '../../../utils'

interface WalletDropdownContentProps {
  setOpenWalletDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

export const WalletDropdownContent = forwardRef((
  {
    setOpenWalletDropdown
  }: WalletDropdownContentProps,
  ref: any
) => {
  const setOpenWalletModal = useOpenWalletModal()
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  const onClickReceive = () => {
    setOpenWalletDropdown(false)
  }

  const onClickHistory = () => {
    setOpenWalletDropdown(false)
  }

  const onClickSettings = () => {
    setOpenWalletDropdown(false)
  }

  const onClickSignout = () => {
    setOpenWalletModal && setOpenWalletModal(false)
    setOpenWalletDropdown(false)
    disconnect()
  }

  return (
    <Box
      padding="3"
      ref={ref}
      zIndex="30"
      borderRadius="md"
      style={{
        position: 'relative',
        pointerEvents: 'auto',
        width: '370px',
        backdropFilter: 'blur(12.5px)',
        top: '16px',
        left: '16px',
        background: "rgba(38, 38, 38, 0.85)"
      }}

    >
      <Box flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap="3"
          marginLeft="2"
        >
          <GradientAvatar style={{ width: '28px' }} size="md" address={address || ''} />
          <Text
            fontSize="large"
            color="text100"
            style={{ fontWeight: '700' }}
          >
            {formatAddress(address || '')}
          </Text>
          <CopyButton
            size="md"
            text={address || ''}
            style={{ marginLeft: '-16px' }}
          />
        </Box>
        <IconButton onClick={() => setOpenWalletDropdown(false)} size="xs" background="buttonGlass" icon={CloseIcon}/>
      </Box>
      <Box gap="2" marginTop="3" flexDirection="column">
        <Button
          style={{ borderRadius: vars.radii.md }}
          width="full"
          leftIcon={QrCodeIcon}
          label="Receive"
          onClick={onClickReceive}
        />
        <Button
          style={{ borderRadius: vars.radii.md }}
          width="full"
          leftIcon={TransactionIcon}
          label="History"
          onClick={onClickHistory}
        />
        <Button
          style={{ borderRadius: vars.radii.md }}
          width="full"
          leftIcon={SettingsIcon}
          label="Settings"
          onClick={onClickSettings}
        />
        <Button
          label="Sign Out"
          style={{ borderRadius: vars.radii.md }}
          width="full"
          leftIcon={SignoutIcon}
          onClick={onClickSignout}
        />
      </Box>
    </Box>
  )
})