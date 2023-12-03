import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { RouteParams } from './types'
import { Meal } from 'src/@types/meal'
import { Alert } from 'react-native'
import { AppError } from 'utils/AppError'
import deleteMeal from 'storage/meal/deleteMeal'

const useMealController = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const { COLORS } = useTheme()
  const route = useRoute()
  const navigation = useNavigation()

  const { meal } = route.params as RouteParams

  const handleDeleteMeal = async () => {
    try {
      await deleteMeal(meal)
      navigation.navigate('home')
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Remove Group', error.message)
      }

      return Alert.alert(
        'Remove Group',
        'An error has occurred while removing a group. Try again.'
      )
    }
  }

  const handleNavigateToEditMeal = (meal: Meal) => {
    navigation.navigate('mealForm', { meal })
  }

  return {
    COLORS,
    meal,
    modalVisible,
    setModalVisible,
    handleNavigateToEditMeal,
    handleDeleteMeal
  }
}

export default useMealController
