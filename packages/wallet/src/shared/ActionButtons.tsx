import React from 'react'
import { Box, Button, TransactionIcon, SwapIcon, SendIcon } from '@0xsequence/design-system'
import { useNavigation } from '../hooks'

export const ActionButtons = () => {
  const { setNavigation } = useNavigation()

  const onClickSend = () => {
    setNavigation({
      location: 'send'
    })
  }

  const onClickHistory = () => {
    setNavigation({
      location: 'history'
    })
  }

  return (
    <Box gap="2" justifyContent="center" marginY="2">
      <Button onClick={onClickSend} leftIcon={SendIcon} label="Send" />
      <Button onClick={onClickHistory} leftIcon={TransactionIcon} label="History" />
    </Box>
  )
}