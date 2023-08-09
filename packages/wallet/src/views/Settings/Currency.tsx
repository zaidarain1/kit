import React from 'react'
import { Box, Text } from '@0xsequence/design-system'

import { SelectButton } from '../../shared/SelectButton'
import { HEADER_HEIGHT, supportedCurrencies } from '../../constants'
import { useSettings } from '../../hooks'

export const SettingsCurrency = () => {
  const { fiatCurrency, setFiatCurrency } = useSettings()
  return (
    <Box style={{ paddingTop: HEADER_HEIGHT }}>
      <Box padding="5" paddingTop="3">
        <Box
          flexDirection="column"
          gap="2"
        >
          {supportedCurrencies.map((currency) => {
            return (
              <SelectButton
                key={currency.id}
                value={currency.id}
                selected={currency.id === fiatCurrency}
                onClick={() => setFiatCurrency && setFiatCurrency(currency.id)}
              >
                <Box gap="2" justifyContent="flex-start" alignItems="center">
                  <Text color="text100" fontWeight="bold">
                    {currency.shortName}
                  </Text>
                  <Text color="text50">
                    {currency.name}
                  </Text>
                </Box>
              </SelectButton>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}