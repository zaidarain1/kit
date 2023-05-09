import React from 'react'
import { ChevronLeftIcon, Box, Button } from '@0xsequence/design-system'

import { CollectionsSummary } from '../components/CollectionsSummary'
import { useNavigation } from '../hooks'

export const AllCollections = () => {
  const { setNavigation } = useNavigation()

  const onClickBack = () => {
    setNavigation && setNavigation({
      location: 'home'
    })
  }

  const getContent = () => {
    return (
      <Box>
        <CollectionsSummary showAll />
      </Box>
    )
  }

  return (
    <Box paddingX="4" paddingBottom="4">
      <Box alignItems="center" style={{ height: '60px' }}>
        <Button leftIcon={ChevronLeftIcon} onClick={onClickBack} label="Home" />
      </Box>

      {getContent()}
    </Box>
  )
}