'use client'

import { truncateAddress } from '@/utils'
import { Box, Image, Button, Text, GradientAvatar } from '@0xsequence/design-system'
import { useOpenConnectModal } from '@0xsequence/kit'

import { useEffect, useState } from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const { isConnected } = useAccount()
  const { setOpenConnectModal } = useOpenConnectModal()

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? (
    <main>
      {!isConnected ? (
        <Box flexDirection="column" alignItems="center" justifyContent="center" gap="5">
          <Box background="white" padding="2" borderRadius="sm">
            <Image alt="Next" src="next.svg" height="3" />
          </Box>
          <Box flexDirection="row" alignItems="center" justifyContent="center" gap="3">
            <Image alt="Sequence Kit Logo" style={{ width: '48px' }} src="kit-logo.svg" />
            <Image
              alt="Sequence Kit Text Logo"
              style={{
                width: '32px'
                // filter: theme === 'dark' ? 'invert(0)' : 'invert(1)'
              }}
              src="kit-logo-text.svg"
            />
          </Box>
          <Box gap="2" flexDirection="row" alignItems="center">
            <Button onClick={() => setOpenConnectModal(true)} variant="feature" label="Connect" />
          </Box>
        </Box>
      ) : (
        <Connected />
      )}

      <Footer />
    </main>
  ) : null
}

const Connected = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <>
      <Header />
    </>
  )
}
