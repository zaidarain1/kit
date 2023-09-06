import React from 'react'
import { Box, Image, Text } from '@0xsequence/design-system'
import { useNetwork, useSwitchNetwork } from 'wagmi'

import { SelectButton } from '../../shared/SelectButton'
import { HEADER_HEIGHT } from '../../constants'
import { getChainIdList, getNativeTokenInfoByChainId } from '@0xsequence/kit'

export const SettingsNetwork = () => {
  const chainIds = getChainIdList()
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork() 

  const onChainNetwork = (chainId: number) => {
    switchNetwork && switchNetwork(chainId)
  }

  return (
    <Box>
      <Box padding="5" paddingTop="3">
        <Text variant="small" color="text50">
          Networks
        </Text>
        <Box
          flexDirection="column"
          gap="2"
        >
          {chainIds.map((chainId) => {
            const networkInfo = getNativeTokenInfoByChainId(chainId)
            return (
              <SelectButton
                key={chainId}
                selected={chainId === chain?.id}
                onClick={onChainNetwork}
                value={chainId}
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