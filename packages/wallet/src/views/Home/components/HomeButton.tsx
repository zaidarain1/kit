import { Box, Button, ChevronLeftIcon } from '@0xsequence/design-system'
import React from 'react'
import { useNavigation } from '../../../hooks'

export const HomeButton = () => {
  const { setNavigation } = useNavigation()

  const onClickBack = () => {
    setNavigation({ location: 'home' })
  }

  return (
    <Box alignItems="center" style={{ height: '60px' }}>
      <Button leftIcon={ChevronLeftIcon} onClick={onClickBack} label="Home" />
    </Box>
  )
}