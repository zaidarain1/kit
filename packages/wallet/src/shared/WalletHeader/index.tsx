import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  Button,
  ChevronLeftIcon,
  IconButton,
  SearchIcon,
  vars,
} from '@0xsequence/design-system'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { AnimatePresence, motion } from 'framer-motion'

import { AccountInformation } from './components/AccountInformation'
import { WalletDropdownContent } from './components/WalletDropdownContent'

import { HEADER_HEIGHT } from '../../constants'
import { useNavigation } from '../../hooks'
import { Navigation } from '../../contexts'

interface WalletHeaderProps {
  backLocation?: Navigation
}

export const WalletHeader = ({
  backLocation,
}: WalletHeaderProps) => {
  const [openWalletDropdown, setOpenWalletDropdown] = useState<boolean>(false)
  const { setNavigation } = useNavigation()

  const onClickAccount = () => {
    setOpenWalletDropdown(true)
  }

  const onClickBack = () => {
    if (backLocation) {
      setNavigation(backLocation)
    }
  }

  const onClickSearch = () => {
    console.log('clicked search')
  }

  return (
    <Box as={motion.div}>
      <PopoverPrimitive.Root open={openWalletDropdown}>
        <PopoverPrimitive.Anchor />
        <Box
          background="backgroundPrimary"
          zIndex="20"
          position="fixed"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          width="full"
          style={{
            height: HEADER_HEIGHT,
            paddingTop: '6px'
          }}
        >
          {backLocation ? (
            <IconButton
              onClick={onClickBack}
              icon={ChevronLeftIcon}
              style={{
                backgroundColor: vars.colors.backgroundPrimary,
                width: '44px'
              }}
            />
          ) : (
            <IconButton
              onClick={onClickSearch}
              icon={SearchIcon}
              style={{
                backgroundColor: vars.colors.backgroundPrimary,
                width: '44px'
              }}
            />
          )}
          <PopoverPrimitive.Trigger asChild>
            <AccountInformation onClickAccount={onClickAccount} />
          </PopoverPrimitive.Trigger>
          <Box style={{ width: '44px' }} />
        </Box>

        <AnimatePresence>
          {openWalletDropdown && (
          <PopoverPrimitive.Portal
          >
            <PopoverPrimitive.Content
              asChild
              side="bottom"
              align="start"
            >
              <WalletDropdownContent setOpenWalletDropdown={setOpenWalletDropdown} />
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        )}
      </AnimatePresence>
      </PopoverPrimitive.Root>
    </Box>
  )
}