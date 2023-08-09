import React, { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Box,
  Modal,
  ThemeProvider,
} from '@0xsequence/design-system'
import { AnimatePresence } from 'framer-motion'

import { useTheme } from '@0xsequence/kit-core'

import {
  PaperTransactionForm,
  PendingTransaction,
  TransactionError,
  TransactionSuccess,
} from '../views'
import { Navigation, NavigationContext, CheckoutModalContext, CheckoutSettings } from '../contexts'

import '@0xsequence/design-system/styles.css'

export type KitCheckoutProvider = {
  children: React.ReactNode,
}

export const KitCheckoutProvider = ({ children }: KitCheckoutProvider) => {
  const { theme } = useTheme()
  const [openCheckoutModal, setOpenCheckoutModal] = useState<boolean>(false)
  const [settings, setSettings] = useState<CheckoutSettings>()
  const [navigation, setNavigation] = useState<Navigation>({
    location: 'transaction-form'
  })

  const triggerCheckout = (settings: CheckoutSettings) => {
    setSettings(settings)
    setOpenCheckoutModal(true)
  }

  const closeCheckout = () => {
    setOpenCheckoutModal(false)
  }

  const queryClient = new QueryClient()

  const getContent = () => {
    const { location } = navigation
    switch (location) {
      case 'transaction-pending':
        return <PendingTransaction />
      case 'transaction-success':
        return <TransactionSuccess />
      case 'transaction-error':
        return <TransactionError />
      case 'transaction-form':
      default:
        return <PaperTransactionForm />
    }
  }

  useEffect(() => {
    if (openCheckoutModal) {
      setNavigation({ location: 'transaction-form' })
    }
  }, [openCheckoutModal])

  return (
    <QueryClientProvider client={queryClient}>
      <CheckoutModalContext.Provider value={{ triggerCheckout, closeCheckout, settings, theme }}>
        <NavigationContext.Provider value={{ setNavigation, navigation }}>
          <ThemeProvider theme={theme}>
            <AnimatePresence>
              {openCheckoutModal && (
                <Modal
                  contentProps={{
                    style: {
                      maxWidth: '400px'
                    }
                  }}
                  scroll={true}
                  backdropColor="transparent"
                  onClose={() => setOpenCheckoutModal(false)}
                >
                  <Box id="sequence-kit-checkout-content">
                    {getContent()}
                  </Box>
                </Modal>
              )}
            </AnimatePresence>
          </ThemeProvider>
          {children}
        </NavigationContext.Provider>
      </CheckoutModalContext.Provider>
    </QueryClientProvider>
  )
}
