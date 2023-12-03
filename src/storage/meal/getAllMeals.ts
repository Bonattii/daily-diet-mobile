import AsyncStorage from '@react-native-async-storage/async-storage'

import { Meal } from 'src/@types/meal'
import { MEAL_COLLECTION } from 'storage/storageConfig'

const getAllMeals = async () => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: Meal[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    throw error
  }
}

export default getAllMeals
