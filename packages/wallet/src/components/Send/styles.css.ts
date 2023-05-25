import { style } from '@vanilla-extract/css'

export const clickableRowItem = style({
  userSelect: 'none',
  cursor: 'pointer',
  ':hover': {
    opacity: 0.8,
  }
})
