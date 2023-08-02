import React, { useState } from 'react'
import { Box, Button, Card, ChevronRightIcon, Divider, Text, TextInput } from '@0xsequence/design-system'

import { isEmailValid } from '../../../utils'
import { KitConnectProviderProps } from '../index'
import * as styles from '../../styles.css'

interface OneTimeClickWalletProps extends KitConnectProviderProps {
  openConnectModal: boolean
  setOpenConnectModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const OneTimeClickWallet = (props: OneTimeClickWalletProps) => {
  const [email, setEmail] = useState('')

  const onChangeEmail = (ev: React.ChangeEventHandler<HTMLInputElement>) => {
    /* @ts-ignore-next-line */
    setEmail(ev.target.value)
  }

  return (
    <Box marginTop="5">
      <TextInput
        /* @ts-ignore-next-line */
        onChange={onChangeEmail}
        value={email}
        name="email"
        placeholder="Enter email"
      />
      <Button
        disabled={!isEmailValid(email)}
        marginTop="4"
        width="full"
        label="Continue"
        rightIcon={ChevronRightIcon}
      />
      <Box>
        <Divider />
      </Box>
      <Box justifyContent="center" alignItems="center">
        <Text variant="small" color="text50">or sign in via</Text>
      </Box>
      <Box marginTop="3" gap="3" flexDirection="row" justifyContent="space-between" alignItems="center">
        {Array(4).fill(null).map((_, i) => (
          <Card className={styles.clickable} aspectRatio="1/1">
            {i}
          </Card>
        ))}
      </Box>
    </Box>
  )
}