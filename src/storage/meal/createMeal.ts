import AsyncStorage from '@react-native-async-storage/async-storage'

import { Meal } from 'src/@types/meal'
import getAllMeals from './getAllMeals'
import { AppError } from 'utils/AppError'
import { MEAL_COLLECTION } from 'storage/storageConfig'

const createMeal = async (meal: Meal) => {
  try {
    const storedMeals = await getAllMeals()

    const mealAlreadyExists = storedMeals.some(
      (storedMeal) =>
        storedMeal.date === meal.date && storedMeal.time === meal.time
    )

    if (mealAlreadyExists) {
      throw new AppError('Meal at this date and time already exists.')
    }

    const storage = JSON.stringify([...storedMeals, meal])
    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}

export default createMeal
