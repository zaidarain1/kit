import React, { useState, useEffect, ChangeEvent } from 'react'
import { Box, Button, Card, Spinner, Text, TextInput } from '@0xsequence/design-system'
import { NetworkConfig, ChainId, networks } from '@0xsequence/network'
import { CheckoutWithCard, PaperSDKProvider } from '@paperxyz/react-client-sdk'
import { getPaperNetworkName } from '../../utils'
import { useNavigation } from '../../hooks'
import { fetchPaperSecret } from '../../api'
import { CheckoutSettings } from '../../contexts/CheckoutModal'

export interface PaperTransactionProps {
  settings: CheckoutSettings
}

export const PaperTransaction = ({
  settings
}: PaperTransactionProps) => {
  const [showEmailInputState, setShowEmailInputState] = useState(!settings.email)
  const [inputEmailAddress, setInputEmailAddress] = useState<string | undefined>(settings.email)
  const [paperSecret, setPaperSecret] = useState<string | null>(null)
  const { setNavigation } = useNavigation()

  // const network = networks[settings.chainId as ChainId]

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
      setNavigation({
        location: 'transaction-error',
        params: {
          error: e
        }
      })
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      // This is a workaround for the KYC modal not becoming clickable
      // The alternative of using the onReview callback does not work due
      // to race conditions
      const paperJsSdkModal = document.getElementById('paper-js-sdk-modal')
      if (paperJsSdkModal) {
        paperJsSdkModal.style.pointerEvents = 'visible'
      }
    }, 100)
    return (() => {
      clearInterval(timer)
    })
  }, [])

  useEffect(() => {
    if (!showEmailInputState) {
      fetchSecret()
    }
  }, [showEmailInputState])

  const isValidEmailAddress = () => {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
    const isValidEmail = emailRegEx.test(inputEmailAddress || '')
    return isValidEmail
  }

  const emailAddressOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputEmailAddress(ev.target.value)
  }

  const getContent = () => {
    if (showEmailInputState) {
      return (
        <Box
          as="form"
          gap="2"
          flexDirection="column"
          onSubmit={() => {
            setPaperSecret(null)
            setShowEmailInputState(false)
          }}
        >
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
            type="submit"
            disabled={!isValidEmailAddress()}
            label="Next"
          />
        </Box>
      )
    }

    if (!paperSecret) {
      return (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="full"
          height="full"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size="lg" style={{ width: '60px', height: '60px' }} />
        </Box>
      )
    }

    const onPending = (transactionId: string) => {
      setNavigation({
        location: 'transaction-pending',
        params: {
          transactionId
        }
      })
    }

    const onError = (error: Error) => {
      setNavigation({
        location: 'transaction-error',
        params: {
          error
        }
      })
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

        <Card marginY="4" flexDirection="column">
          <CheckoutWithCard
            sdkClientSecret={paperSecret}
            appName={settings.receiptTitle}
            onReview={() => {}}
            onPaymentSuccess={result => {
              // @ts-ignore-next-line
              onPending(result.id)
            }}
            onError={error => {
              console.error('Payment error:', error)
              onError(error.error)
            }}
            options={{
              // colorBackground: '#cce3de',
              colorPrimary: '#447dd1',
              colorText: '#ffffff',
              borderRadius: 12
            }}
          />
        </Card>
      </Box>
    )
  }

  return (
    <Box>
      {getContent()}
    </Box>
  )
}