import { FiatCurrency } from '../contexts/Settings'

export interface Currency {
  id: FiatCurrency
  name: string
  shortName: string
  symbol: string
}

export const supportedCurrencies: Currency[] = [
  {
    id: 'USD',
    name: 'US dollar',
    shortName: 'USD',
    symbol: '$'
  },
  {
    id: 'CAD',
    name: 'Canadian dollar',
    shortName: 'CAD',
    symbol: '$'
  },
  {
    id: 'EUR',
    name: 'US dollar',
    shortName: 'EURO',
    symbol: '€'
  }
]
