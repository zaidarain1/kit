import { Button, CopyIcon, CheckmarkIcon, Icon, IconButton } from '@0xsequence/design-system'
import React, { useEffect, useState, ComponentProps } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

type ButtonProps = ComponentProps<typeof Button>

interface CopyButtonProps extends ButtonProps {
  text: string
}

export const CopyButton = (props: CopyButtonProps) => {
  const { text, size = 'xs', ...rest } = props
  const [isCopied, setCopy] = useState(false)

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setCopy(false)
      }, 4000)
    }
  }, [isCopied])

  const handleCopy = () => {
    setCopy(true)
  }

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <IconButton
        size={size}
        icon={isCopied ? CheckmarkIcon : CopyIcon}
        {...rest}
        style={{ background: 'rgba(0,0,0,0)', ...props?.style }}
      />
    </CopyToClipboard>
  )
}
