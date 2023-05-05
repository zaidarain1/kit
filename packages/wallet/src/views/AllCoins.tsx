import React from 'react'
import { Box, Button } from '@0xsequence/design-system'

import { useNavigation } from '../hooks/useNavigation'

export const AllCoins = () => {
  const setNavigation = useNavigation()

  const onClickBack = () => {
    setNavigation && setNavigation({
      location: 'home'
    })
  }

  return (
    <Box paddingX="4" paddingBottom="4">
      <Box alignItems="center" style={{ height: '60px' }}>
        <Button onClick={onClickBack} label="back" />
      </Box>
      all coins go here
    </Box>
  )
}