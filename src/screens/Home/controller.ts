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
          date: '23.11.28',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nisl nisl ultricies nisl, eget ultricies nisl nisl eget ultricies nisl.',
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
