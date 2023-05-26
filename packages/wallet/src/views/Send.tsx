import { TokenBalance } from '@0xsequence/indexer'
import { Box, Tabs, Text } from '@0xsequence/design-system'
import React, { useState } from 'react'
import { HomeButton } from '../components/HomeButton'
import { SendCoins, SendCollectibles } from '../components/Send'
import { SendCoinContext, SendCollectiblesContext, CollectiblesToSend, CollectionToSend } from '../contexts'

export enum AssetType {
  COINS = 'coins',
  COLLECTIBLES = 'collectibles'
}

export const Send = () => {

    // Send Coin Context
    const [amountToSendCoin, setAmountToSendCoin] = useState<string>('')
    const [toAddressCoin, setToAddressSendCoin] = useState<string>('')
    const [selectedTokenCoin, setSelectedTokenSendCoin] = useState<TokenBalance>()
  
    // Send Collectible Context
    const [collectibles, setCollectibles] = useState<CollectiblesToSend[]>([])
    const [toAddressCollectibles, setToAddressCollectibles] = useState<string>('')
    const [collection, setCollection] = useState<CollectionToSend | undefined>(undefined)

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
                  content: (
                    <SendCoinContext.Provider
                      value={{
                        amount: amountToSendCoin,
                        setAmount: setAmountToSendCoin,
                        toAddress: toAddressCoin,
                        setToAddress: setToAddressSendCoin,
                        selectedToken: selectedTokenCoin,
                        setSelectedToken: setSelectedTokenSendCoin,
                      }}
                    >
                      <Box marginTop="2">
                        <SendCoins />
                      </Box>
                    </SendCoinContext.Provider>
                  ),
                },
                {
                  value: 'collectibles',
                  label: 'Collectibles',
                  content: (
                    <SendCollectiblesContext.Provider
                      value={{
                        collectibles,
                        setCollectibles,
                        toAddress: toAddressCollectibles,
                        setToAddress: setToAddressCollectibles,
                        collection,
                        setCollection,
                      }}
                    >
                    <Box marginTop="2">
                      <SendCollectibles />
                    </Box>
                    </SendCollectiblesContext.Provider>
                  ),
                },
              ]
            }
          />
        </Box>
      </Box>
  )
}