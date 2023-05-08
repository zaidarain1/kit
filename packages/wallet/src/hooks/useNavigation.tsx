import { useContext } from 'react'
import { NavigationContext } from '../contexts/Navigation'

export const useNavigation = () => {
  const { setNavigation, navigation } = useContext(NavigationContext)

  return { setNavigation, navigation }
}