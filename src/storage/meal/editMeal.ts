import AsyncStorage from '@react-native-async-storage/async-storage'

import { Meal } from 'src/@types/meal'
import getAllMeals from './getAllMeals'
import { AppError } from 'utils/AppError'
import { MEAL_COLLECTION } from 'storage/storageConfig'

const editMeal = async (existentMeal: Meal, editedMeal: Meal) => {
  try {
    const storedMeals = await getAllMeals()

    const mealIndex = storedMeals.findIndex(
      (storedMeal) =>
        storedMeal.date === existentMeal.date &&
        storedMeal.time === existentMeal.time
    )

    if (mealIndex === -1) {
      throw new AppError('Meal at this date and time does not exist.')
    }

    const editedMealExists = storedMeals.some(
      (storedMeal) =>
        storedMeal.date === editedMeal.date &&
        storedMeal.time === editedMeal.time
    )

    if (editedMealExists) {
      throw new AppError('Meal at this date and time already exists.')
    }

    storedMeals[mealIndex] = editedMeal

    const storage = JSON.stringify(storedMeals)
    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}

export default editMeal
