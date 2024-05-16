import { useSnapshot, INTERNAL_Snapshot } from 'valtio'

import { setHistory, navigationState, Navigation, History } from '../states/Navigation'

// interface UseNavigation {
//   setNavigation: (navigation: Navigation) => void
//   setHistory: (history: History) => void
//   history: INTERNAL_Snapshot<History>
//   goBack: () => void
// }

export const useNavigation = () => {
  const { history } = useSnapshot(navigationState)

  const setNavigation = (navigation: Navigation) => {
    // Scroll to top of page when navigating to a new page
    const childElement = document.getElementById('sequence-kit-wallet-content')
    const parentElement = childElement?.parentElement
    parentElement?.scrollTo(0, 0)

    const newHistory = navigation.location === 'home' ? [] : [...history, navigation]
    setHistory(newHistory as History)
  }

  const goBack = () => {
    const newHistory = [...history]
    newHistory.pop()
    setHistory(newHistory as History)
  }

  return { setNavigation, history, setHistory, goBack }
}
