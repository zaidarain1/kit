import React, { useState, useEffect, ChangeEvent } from 'react'
import { Box, Button, Text, TextInput } from '@0xsequence/design-system'
import { fetchPaperSecret } from '../api'
import { CheckoutSettings } from '../contexts/CheckoutModal'

export interface PaperTransactionProps {
  settings: CheckoutSettings
}

export const PaperTransaction = ({
  settings
}: PaperTransactionProps) => {
  const [showEmailInputState, setShowEmailInputState] = useState(!settings.email)
  const [inputEmailAddress, setInputEmailAddress] = useState<string | undefined>(settings.email)
  const [paperSecret, setPaperSecret] = useState<string | null>(null)
  const [transactionId, setTransactionId] = useState<string | null>(null)

  const onClickChangeEmail = () => {
    setInputEmailAddress(undefined)
    setShowEmailInputState(true)
  }

  const fetchSecret = async () => {
    try {
      if (!inputEmailAddress) {
        throw 'No email address found'
      }

      const secret = await fetchPaperSecret({
        email: inputEmailAddress,
        ...settings
      })

      setPaperSecret(secret)
    } catch(e) {
      console.error('Failed to fetch paper secret', e )
    }
  }

  useEffect(() => {
    if (!showEmailInputState) {
      fetchSecret()
    }
  }, [showEmailInputState])

  const isValidEmailAddress = () => {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const isValidEmail = emailRegEx.test(inputEmailAddress || '')
    return isValidEmail
  }

  const emailAddressOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputEmailAddress(ev.target.value)
  }

  const getContent = () => {
    if (showEmailInputState) {
      return (
        <Box gap="2" flexDirection="column">
          <Text variant="normal" color="text80">
            Enter Email Address. A receipt will be sent to this address.
          </Text>
          <TextInput
            name="email"
            type="email"
            placeholder="Email Address"
            value={inputEmailAddress}
            onChange={emailAddressOnChange}
          />
          <Button
            disabled={!isValidEmailAddress()}
            onClick={() => {
              setShowEmailInputState(false)
            }}
            label="Next"
          />
        </Box>
      )
    }

    return (
      <Box>
        <Box gap="2" alignItems="center">
          <Box>
            <Text variant="normal" color="text80">
              Receipt Email Address: 
            </Text>
            {' '}
            <Text variant="normal" fontWeight="bold" color="text80">
              {inputEmailAddress}
            </Text>
          </Box>
          {!settings.email && (
            <Button
              onClick={() => {
                onClickChangeEmail()
              }}
              label="Change Email"
            />
          )}
        </Box>
      </Box>
    )
  }

  return (
    <Box>
      {getContent()}
    </Box>
  )
}