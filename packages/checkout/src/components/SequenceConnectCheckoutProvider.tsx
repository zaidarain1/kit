import React, { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Box,
  Modal,
  ThemeProvider,
} from '@0xsequence/design-system'
import { AnimatePresence } from 'framer-motion'

import {
  PaperTransactionForm,
  PendingTransaction,
  TransactionError,
  TransactionSuccess,
} from '../views'
import { Navigation, NavigationContext, CheckoutModalContext, CheckoutSettings } from '../contexts'

import '@0xsequence/design-system/styles.css'

export declare const THEME: readonly ["dark", "light"];
export declare type Theme = typeof THEME[number];
export const THEMES = {
  dark: 'dark' as Theme,
  light: 'light' as Theme
};

export type SequenceConnectCheckoutProvider = {
  children: React.ReactNode,
  theme?: Theme
}

export const SequenceConnectCheckoutProvider = ({ children, theme }: SequenceConnectCheckoutProvider) => {
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
        const transactionId = navigation.params?.transactionId
        if (!transactionId) {
          return <TransactionError />
        }
        return <PendingTransaction transactionId={transactionId} />
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
                <Modal scroll={true} backdropColor="transparent" onClose={() => setOpenCheckoutModal(false)}>
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
