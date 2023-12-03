import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { RouteParams } from './types'
import { Meal } from 'src/@types/meal'

const useMealController = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const { COLORS } = useTheme()
  const route = useRoute()
  const navigation = useNavigation()

  const { meal } = route.params as RouteParams

  const handleNavigateToEditMeal = (meal: Meal) => {
    navigation.navigate('mealForm', { meal })
  }

  return {
    COLORS,
    meal,
    modalVisible,
    setModalVisible,
    handleNavigateToEditMeal
  }
}

export default useMealController
