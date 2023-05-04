import React from 'react'
import { Box, BoxProps } from '@0xsequence/design-system'

import * as styles from './styles.css'

interface SkeletonProps {
  width: number,
  height: number,
  borderRadius?: BoxProps['borderRadius']
}

export const Skeleton = ({
  width,
  height,
  borderRadius = 'md'
}: SkeletonProps) => {
  return (
    <Box className={styles.skeleton} borderRadius={borderRadius} style={{ width, height }} />
  )
}

