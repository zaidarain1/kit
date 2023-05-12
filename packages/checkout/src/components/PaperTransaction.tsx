import React, { useState } from 'react'
import { Box } from '@0xsequence/design-system'
import { CheckoutSettings } from '../contexts/CheckoutModal'

export interface PaperTransactionProps {
  settings: CheckoutSettings
}

export const PaperTransaction = ({
  settings
}: PaperTransactionProps) => {
  const [isEmailInputState, setIsEmailInputState] = useState(!settings.email)
  const [inputEmailAddress, setInputEmailAddress] = useState('')
  const [paperSecret, setPaperSecret] = useState<string | null>(null)

  return (
    <Box>
      Paper transaction flow
    </Box>
  )
}