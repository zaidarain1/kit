import React from 'react'
import { Box, Image, Text } from '@0xsequence/design-system'
import { useNetwork, useSwitchNetwork } from 'wagmi'

import { SelectButton } from '../../shared/SelectButton'
import { HEADER_HEIGHT } from '../../constants'
import { getNativeTokenInfoByChainId } from '@0xsequence/kit'

export const SettingsNetwork = () => {
  const { chain: connectedChain, chains } = useNetwork()
  const { switchNetwork } = useSwitchNetwork() 

  const onClickChainNetwork = (chainId: number) => {
    switchNetwork && switchNetwork(chainId)
  }

  return (
    <Box style={{ paddingTop: HEADER_HEIGHT }}>
      <Box padding="5" paddingTop="3">
        <Text variant="small" color="text50">
          Networks
        </Text>
        <Box
          flexDirection="column"
          gap="2"
        >
          {chains.map((chain) => {
            const networkInfo = getNativeTokenInfoByChainId(chain.id)
            return (
              <SelectButton
                key={chain.id}
                selected={chain.id === connectedChain?.id}
                onClick={onClickChainNetwork}
                value={chain.id}
              >
                <Box
                  gap="2"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    width="3"
                    height="3"
                    src={networkInfo.logoURI}
                    alt="network"
                  />
                  <Text color="text100" variant="small">{networkInfo.name}</Text>
                </Box>
              </SelectButton>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}