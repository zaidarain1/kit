import { responsiveStyle, vars } from '@0xsequence/design-system'
import { style } from '@vanilla-extract/css'

export const collectibleGrid = style({
  display: 'grid',
  gridColumnGap: vars.space['2'],
  gridRowGap: vars.space['2'],
  gridAutoRows: '1fr',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',

  '@media': responsiveStyle({
    lg: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  })
})
