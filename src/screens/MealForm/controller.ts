import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { RouteParams } from './types'

const useMealFormController = () => {
  const [isOnDiet, setIsOnDiet] = useState(true)

  const { COLORS } = useTheme()
  const route = useRoute()
  const navigation = useNavigation()

  const meal = (route.params as RouteParams)?.meal

  const handleCreateMeal = () => {
    navigation.navigate('feedback', { isOnDiet })
  }

  const handleEditMeal = () => {
    navigation.navigate('feedback', { isOnDiet })
  }

  return {
    COLORS,
    meal,
    isOnDiet,
    setIsOnDiet,
    handleCreateMeal,
    handleEditMeal
  }
}

export default useMealFormController
