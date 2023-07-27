import React from 'react'
import { Box } from '@0xsequence/design-system'

import { HomeButton } from './Home/components/HomeButton'
import { CollectionsSummary } from '../shared/CollectionsSummary'
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
      <HomeButton />

      {getContent()}
    </Box>
  )
}