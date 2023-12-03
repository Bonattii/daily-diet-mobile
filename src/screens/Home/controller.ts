import { Alert } from 'react-native'
import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { MealList } from './types'
import { Meal } from 'src/@types/meal'
import getAllMeals from 'storage/meal/getAllMeals'

const useHomeController = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<MealList[]>([])

  const navigation = useNavigation()

  const fetchMeals = async () => {
    try {
      setIsLoading(true)

      const data = await getAllMeals()

      const mealList: MealList[] = data.reduce(
        (acc: MealList[], meal: Meal) => {
          const existingMealList = acc.find((ml) => ml.date === meal.date)

          if (existingMealList) {
            existingMealList.mealInfo.push(meal)
          } else {
            acc.push({ date: meal.date, mealInfo: [meal] })
          }

          return acc
        },
        []
      )

      setMeals(mealList)
      setIsLoading(false)
    } catch (error) {
      Alert.alert('Meals', 'An error occurred while fetching meals. Try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, [])
  )

  const handleOpenStatistics = () => {
    navigation.navigate('statistics')
  }

  const handleOpenNewMeal = () => {
    navigation.navigate('mealForm', {})
  }

  const handleOpenMealPage = (meal: Meal) => {
    navigation.navigate('meal', { meal })
  }

  let percentageOnDiet = 0

  if (meals.length > 0) {
    const onDietMeals = meals
      .flatMap((mealList) => mealList.mealInfo)
      .filter((meal) => meal.isOnDiet)

    percentageOnDiet =
      (onDietMeals.length /
        meals.flatMap((mealList) => mealList.mealInfo).length) *
      100
  }

  return {
    meals,
    isLoading,
    handleOpenStatistics,
    handleOpenNewMeal,
    handleOpenMealPage,
    percentageOnDiet
  }
}

export default useHomeController
