import React, { useContext } from 'react'
import { NavigationContext, Navigation } from '../contexts/Navigation'

export const useNavigation = () => {
  const { setNavigation: setNavigationFunction, navigation } = useContext(NavigationContext)

  const setNavigation = (navigation: Navigation) => {
    // Scroll to top of page when navigating to a new page
    const childElement = document.getElementById("sequence-kit-wallet-content")
    const parentElement = childElement?.parentElement
    parentElement?.scrollTo(0, 0)

    setNavigationFunction && setNavigationFunction(navigation)
  }


  return { setNavigation, navigation }
}