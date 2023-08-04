import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  Button,
  IconButton,
  SearchIcon,
  vars,
} from '@0xsequence/design-system'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { AnimatePresence, motion } from 'framer-motion'

import { AccountInformation } from './components/AccountInformation'
import { WalletDropdownContent } from './components/WalletDropdownContent'


export const HomeHeader = () => {
  const [openWalletDropdown, setOpenWalletDropdown] = useState<boolean>(false)

  const onClickAccount = () => {
    setOpenWalletDropdown(true)
  }

  const onClickSearch = () => {
    console.log('clicked search')
  }

  return (
    <Box as={motion.div}>
      <PopoverPrimitive.Root open={openWalletDropdown}>
        <PopoverPrimitive.Anchor />
        <Box background="backgroundPrimary" zIndex="20" position="fixed" width="full">
          <IconButton
            onClick={onClickSearch}
            icon={SearchIcon}
            style={{ float: 'left', marginTop: '8px', backgroundColor: vars.colors.backgroundPrimary }}
          />
          <PopoverPrimitive.Trigger asChild>
            <AccountInformation onClickAccount={onClickAccount} />
          </PopoverPrimitive.Trigger>
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
              <WalletDropdownContent />
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        )}
      </AnimatePresence>
      </PopoverPrimitive.Root>
    </Box>
  )
}