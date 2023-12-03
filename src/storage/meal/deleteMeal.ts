import AsyncStorage from '@react-native-async-storage/async-storage'

import { Meal } from 'src/@types/meal'
import getAllMeals from './getAllMeals'
import { AppError } from 'utils/AppError'
import { MEAL_COLLECTION } from 'storage/storageConfig'

const deleteMeal = async (meal: Meal) => {
  try {
    const storedMeals = await getAllMeals()

    const mealIndex = storedMeals.findIndex(
      (storedMeal) =>
        storedMeal.date === meal.date && storedMeal.time === meal.time
    )

    if (mealIndex === -1) {
      throw new AppError('Meal does not exist.')
    }

    storedMeals.splice(mealIndex, 1)

    const storage = JSON.stringify(storedMeals)
    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}

export default deleteMeal
