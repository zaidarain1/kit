import React, { useState } from 'react'
import { Box, SearchIcon, TextInput } from '@0xsequence/design-system'

import { useNavigation } from '../../hooks'

interface SearchWalletViewAllProps {
  defaultTab: 'coins' | 'collectibles'
}

export const SearchWalletViewAll = ({
  defaultTab
}: SearchWalletViewAllProps) => {
  const [search, setSearch] = useState('')

  return (
    <Box
      padding="5"
      paddingTop="3"
      flexDirection="column"
      gap="5"
      alignItems="center"
      justifyContent="center"  
    >
      <Box>
        default tab: {defaultTab}
      </Box>

      <Box width="full">
        <TextInput
          name="search wallet"
          leftIcon={SearchIcon}
          value={search}
          onChange={ev => setSearch(ev.target.value)}
          placeholder="Search your wallet"
        />
      </Box>

      <Box>
        list of items....
      </Box>
    </Box>
  )
}