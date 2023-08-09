import React from 'react'
import { Box, Card, Switch, Text } from '@0xsequence/design-system'
import { HEADER_HEIGHT } from '../../constants'

export const SettingsGeneral = () => {
  return (
    <Box style={{ paddingTop: HEADER_HEIGHT }}>
      <Box padding="5" paddingTop="3">
        <Card>
          <Text>
            Hide unlisted tokens
          </Text>
          <Switch
              checked={true}
              onCheckedChange={() => {}}
          />
        </Card>
      </Box>
    </Box>
  )
}