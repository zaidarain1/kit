import React, { forwardRef } from 'react'
import { Box, Button } from '@0xsequence/design-system'

export const WalletDropdownContent = () => {

  // Todo add forward ref and fix animation

  return (
    <Box
      zIndex="30"
      background="buttonGlass"
      borderRadius="md"
      style={{
        position: 'relative',
        pointerEvents: 'auto',
        width: '370px',
        height: '400px',
        backdropFilter: 'blur(12.5px)',
        top: '16px',
        left: '16px',
      }}
    >
      stuff goes here...
      <Button label="click" onClick={() => console.log('click')} />
    </Box>
  )
}