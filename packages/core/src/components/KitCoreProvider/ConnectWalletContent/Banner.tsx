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
  const { logoUrlDarkMode, logoUrlLightMode } = signIn 
  const { theme } = useTheme()

  return (
    <>
      {theme === 'dark' && logoUrlDarkMode && (
        <Box marginTop="5" justifyContent="center" alignItems="center">
          <Image src={logoUrlDarkMode} style={{ height: '110px' }} />
        </Box>
      )}
      {theme === 'light' && logoUrlLightMode && (
        <Box marginTop="5" justifyContent="center" alignItems="center">
          <Image src={logoUrlLightMode} style={{ height: '110px' }} />
        </Box>
      )}
    </>
  )
}