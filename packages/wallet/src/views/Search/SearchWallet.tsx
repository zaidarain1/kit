import React, { useState } from 'react'
import { Box, SearchIcon, Text, TextInput, ChevronRightIcon } from '@0xsequence/design-system'
import { WalletLink } from './components/WalletLink'

export const SearchWallet = () => {
  const [search, setSearch] = useState('')

  // TODO: create hook for 1. fetch collections 2. fetch collectibles
  // can be the infinite query that will be used later

  return (
    <Box
      padding="5"
      paddingTop="3"
      flexDirection="column"
      gap="10"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="full">
        <TextInput
          name="search wallet"
          leftIcon={SearchIcon}
          value={search}
          onChange={ev => setSearch(ev.target.value)}
          placeholder="Search your wallet"
        />
      </Box>
      <Box width="full">
        <WalletLink
          toLocation={{
            location: 'search-view-all',
            params: {
              defaultTab: 'collectibles'
            }
          }}
          label="Collectibles"
        />
        <Box>
          list of collectibles go here....
        </Box>
      </Box>
      <Box width="full">
        <WalletLink
          toLocation={{
            location: 'search-view-all',
            params: {
              defaultTab: 'coins'
            }
          }}
          label="Coins"
        />
        <Box>
          list of coins go here....
        </Box>
      </Box>
    </Box>
  )
}