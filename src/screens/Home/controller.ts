import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { MealList } from './types'

const useHomeController = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [meals, setMeals] = useState<MealList[]>([
    {
      date: '23.11.28',
      mealInfo: [
        {
          time: '08:00',
          title: 'Breakfast',
          isOnDiet: true
        },
        {
          time: '12:00',
          title: 'Lunch',
          isOnDiet: false
        },
        {
          time: '18:00',
          title: 'Dinner',
          isOnDiet: true
        }
      ]
    },
    {
      date: '23.11.29',
      mealInfo: [
        {
          time: '08:00',
          title: 'Breakfast',
          isOnDiet: true
        },
        {
          time: '12:00',
          title: 'Lunch',
          isOnDiet: false
        },
        {
          time: '18:00',
          title: 'Dinner',
          isOnDiet: true
        }
      ]
    },
    {
      date: '23.11.31',
      mealInfo: [
        {
          time: '08:00',
          title: 'Breakfast',
          isOnDiet: true
        },
        {
          time: '12:00',
          title: 'Lunch',
          isOnDiet: false
        },
        {
          time: '18:00',
          title: 'Dinner',
          isOnDiet: true
        }
      ]
    }
  ])

  const navigation = useNavigation()

  const handleOpenStatistics = () => {
    navigation.navigate('statistics')
  }

  const handleOpenNewMeal = () => {
    navigation.navigate('mealForm', {})
  }

  return {
    meals,
    isLoading,
    handleOpenStatistics,
    handleOpenNewMeal
  }
}

export default useHomeController
