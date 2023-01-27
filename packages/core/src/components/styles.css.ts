import { style } from '@vanilla-extract/css'

export const networkButton = style({
  width: '400px',
  ':hover': {
    cursor: 'pointer',
    opacity: '0.8',
    userSelect: 'none'
  }
})