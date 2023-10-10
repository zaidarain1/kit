import React from 'react'
import { Box, Image } from '@0xsequence/design-system'

import { KitConfig } from '../index'
import { useTheme } from '../../../hooks'

interface BannerProps {
  config: KitConfig
}

export const Banner = ({
  config = {}
}: BannerProps) => {
  const { signIn = {} } = config
  const { logoUrl } = signIn 
  const { theme } = useTheme()

  return (
    <>
      {logoUrl && (
        <Box marginTop="5" justifyContent="center" alignItems="center">
          <Image src={logoUrl} style={{ height: '110px' }} />
        </Box>
      )}
    </>
  )
}