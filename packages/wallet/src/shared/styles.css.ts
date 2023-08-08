import { style, globalStyle } from '@vanilla-extract/css'

export const clickable = style({
  ':hover': {
    cursor: 'pointer',
    opacity: '0.8',
    userSelect: 'none'
  }
})

export const walletContent = style({
})

// Will affect the close button in the modal
globalStyle(`${walletContent} + button`, {
  backgroundColor: 'transparent',
})

globalStyle(`${walletContent} + button > svg`, {
  width: '20px',
  height: '20px'
})