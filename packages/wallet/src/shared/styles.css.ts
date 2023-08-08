import { style } from '@vanilla-extract/css'

export const clickable = style({
  ':hover': {
    cursor: 'pointer',
    opacity: '0.8',
    userSelect: 'none'
  }
})


export const modal = style({
  backgroundColor: 'red'
})