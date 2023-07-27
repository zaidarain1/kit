import React from 'react'
import { Box } from '@0xsequence/design-system'

import { HomeButton } from './Home/components/HomeButton'
import { CollectionRow } from '../shared/CollectionRow'
import { useNavigation } from '../hooks'

interface AllCollectiblesProps {
  collectionAddress: string
}

export const AllCollectibles = ({ collectionAddress }: AllCollectiblesProps) => {
  const { setNavigation } = useNavigation()

  const onClickBack = () => {
    setNavigation && setNavigation({
      location: 'home'
    })
  }

  const getContent = () => {
    return (
      <Box>
        <CollectionRow
          collectionAddress={collectionAddress}
          showAll
        />
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