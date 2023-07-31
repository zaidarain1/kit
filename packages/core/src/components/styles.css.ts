import { globalStyle, style } from '@vanilla-extract/css'

export const networkButton = style({
  maxWidth: '400px',
  width: '100%',
  ':hover': {
    cursor: 'pointer',
    opacity: '0.8',
    userSelect: 'none'
  }
})

export const button = style({
  ':hover': {
    cursor: 'pointer',
    opacity: '0.8',
    userSelect: 'none'
  }
})

export const walletLogoContainer = style({}) 

globalStyle (`${walletLogoContainer} svg`, {
  width: '40px'
})

export const walletLogoContainerExtended = style({}) 

globalStyle (`${walletLogoContainerExtended} svg`, {
  width: '30px'
})
