import React from 'react'
import { Badge, Box, Card, Image, Text } from '@0xsequence/design-system'

import { Skeleton } from '../Skeleton'
import { DefaultIcon } from '../DefaultIcon'
import { formatAddress } from '../../utils'

export interface CollectionHeaderProps {
  image?: string
  logo?: string
  name?: string
  type?: string
  description?: string
  address?: string
  isLoading: boolean
}

export const CollectionHeader = ({
  image,
  logo,
  name,
  type,
  description,
  address,
  isLoading
}: CollectionHeaderProps) => {
  if (isLoading) {
    return (
      <Card gap="2" flexDirection="column">
        <Box gap="2" flexDirection="row" alignItems="center" justifyContent="flex-start">
          <Skeleton borderRadius="circle" width={30} height={30} />
          <Skeleton width={150} height={20} />
        </Box>
        <Box alignItems={"center"} justifyContent={"center"}>
          <Skeleton height={300} width="100%" />
        </Box>
        <Box gap="2" flexDirection="column">
          <Skeleton height={16} />
          <Skeleton height={16} width="66%" />
        </Box>
        <Box>
          <Skeleton height={20} width={80} />
        </Box>
      </Card>
    )
  }

  const getImage = (logoURI?: string) => {
    if (logoURI) {
      return (
        <Image src={logoURI} borderRadius="circle" style={{ width: '30px' }} />
      )
    }

    return <DefaultIcon size={30} />
  }

  return (
    <Card gap="2" flexDirection="column">
      <Box alignItems="center" gap="2">
        {getImage(logo)}
        <Text variant="medium">
          {name || formatAddress(address || '')}
        </Text>
      </Box>

      <Box alignItems="center" justifyContent="center">
        <Image src={image} style={{ maxHeight:300 }} />
      </Box>
      <Box>
        <Text>{description}</Text>
      </Box>
      {type && (
        <Box>
          <Badge value={type} />
        </Box>
      )}
    </Card>
  )
}