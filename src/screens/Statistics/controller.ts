import { useEffect, useState } from 'react'

import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import getAllMeals from 'storage/meal/getAllMeals'
import { Meal } from 'src/@types/meal'
import { Alert } from 'react-native'

const useStatisticsController = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<Meal[]>([])

  const navigation = useNavigation()
  const { COLORS } = useTheme()

  const fetchMeals = async () => {
    try {
      setIsLoading(true)

      const data = await getAllMeals()

      setMeals(data)
      setIsLoading(false)
    } catch (error) {
      Alert.alert('Meals', 'An error occurred while fetching meals. Try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoBack = () => {
    navigation.navigate('home')
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  const totalMeals = meals.length

  const mealsOnDiet = meals.filter((meal) => meal.isOnDiet).length
  const mealsOffDiet = meals.filter((meal) => !meal.isOnDiet).length

  const percentageOnDiet = (mealsOnDiet / totalMeals) * 100

  const sortedMeals = [...meals].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  let maxSequence = 0
  let currentSequence = 0
  for (let meal of sortedMeals) {
    if (meal.isOnDiet) {
      currentSequence++
      if (currentSequence > maxSequence) {
        maxSequence = currentSequence
      }
    } else {
      currentSequence = 0
    }
  }

  return {
    handleGoBack,
    COLORS,
    isLoading,
    totalMeals,
    mealsOnDiet,
    mealsOffDiet,
    percentageOnDiet,
    maxSequence
  }
}

export default useStatisticsController
