import React from 'react'
import { Box, CheckmarkIcon } from '@0xsequence/design-system'
import { motion } from 'framer-motion'

interface SelectedIndicatorProps {
  selected: boolean
  className?: string
}

export const SelectedIndicator = (props: SelectedIndicatorProps) => {
  const { selected, className } = props
  return (
    <Box
      borderStyle="solid"
      borderColor="borderNormal"
      borderWidth="thin"
      borderRadius="circle"
      position="relative"
      alignItems="center"
      justifyContent="center"
      flexShrink="0"
      className={className}
      style={{
        width: '20px',
        height: '20px'
      }}
    >
      <Box
        as={motion.div}
        background="backgroundInverse"
        position="absolute"
        borderRadius="circle"
        color="textInverse100"
        initial={{ opacity: selected ? 1 : 0, scale: selected ? 1 : 0.5 }}
        animate={{ opacity: selected ? 1 : 0, scale: selected ? 1 : 0.5 }}
        transition={{ ease: 'backOut' }}
        style={{
          width: '14px',
          height: '14px',
        }}
      />
    </Box>
  )
}
