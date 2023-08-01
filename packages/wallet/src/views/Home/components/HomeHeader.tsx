import React from 'react'
import {
  Box,
  IconButton,
  Text,
  GradientAvatar,
  SearchIcon,
  ChevronDownIcon,
  vars
} from '@0xsequence/design-system'
import { useAccount } from 'wagmi'

import { formatAddress } from '../../../utils'
import * as styles from '../../../shared/styles.css'

export const HomeHeader = () => {
  const { address } = useAccount()

  const onClickSearch = () => {
    console.log('clicked search')
  }

  const onClickAccount = () => {
    console.log('clicked account')
  }

  return (
    <>
      <IconButton
        onClick={onClickSearch}
        icon={SearchIcon}
        style={{ float: 'left', marginTop: '8px', backgroundColor: vars.colors.backgroundPrimary }}
      />
      <Box gap="2" alignItems="center" style={{ height: "60px"}}>
          <Box width="full" flexDirection="column" alignItems="center" justifyContent="center" >
            <Box
              onClick={onClickAccount}
              gap="2"
              alignItems="center"
              justifyContent="center"
              className={styles.clickable}
              position="relative"
              style={{
                marginLeft: '-22px'
              }}
            >
              <GradientAvatar size="sm" address={address || ''} />
              <Text color="text100" fontWeight="medium" variant="normal">
                {formatAddress(address || '')}
              </Text>
              <ChevronDownIcon />
            </Box>
          </Box>
      </Box>
    </>
  )
}