import { useTheme } from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { RouteParams } from './types'

const useFeedbackController = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { FONT_FAMILY } = useTheme()

  const { isOnDiet } = route.params as RouteParams

  const handleNavigateToHome = () => {
    navigation.navigate('home')
  }

  return {
    isOnDiet,
    handleNavigateToHome,
    FONT_FAMILY
  }
}

export default useFeedbackController
