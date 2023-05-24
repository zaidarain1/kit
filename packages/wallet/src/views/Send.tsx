import { Box, Tabs, Text } from '@0xsequence/design-system'
import React from 'react'
import { HomeButton } from '../components/HomeButton'
import { SendCoins, SendCollectibles } from '../components/Send'

export enum AssetType {
  COINS = 'coins',
  COLLECTIBLES = 'collectibles'
}

export const Send = () => {

  return (
    <Box padding="4"gap="4" flexDirection="column">
      <Box style={{ float: 'left', marginTop: '-16px' }}>
        <HomeButton />
      </Box>
      <Box>
        <Text as="h1" variant="normal" fontWeight="bold" color="text100" textAlign="center">
          Send
        </Text>
      </Box>
      <Box>
        <Tabs
          defaultValue="coins"
          tabs={
            [
              {
                value: 'coins',
                label: 'Coins',
                content: <SendCoins />,
              },
              {
                value: 'collectibles',
                label: 'Collectibles',
                content: <SendCollectibles />,
              },
            ]
          }
        />
      </Box>
    </Box>
  )
}