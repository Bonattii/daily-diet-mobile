import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { RouteParams } from './types'
import { AppError } from 'utils/AppError'
import createMeal from 'storage/meal/createMeal'
import editMeal from 'storage/meal/editMeal'

const useMealFormController = () => {
  const [isOnDiet, setIsOnDiet] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const { COLORS } = useTheme()
  const route = useRoute()
  const navigation = useNavigation()

  const meal = (route.params as RouteParams)?.meal

  const handleCreateMeal = async () => {
    try {
      const fields = [
        { value: title, name: 'Title' },
        { value: description, name: 'Description' },
        { value: date, name: 'Date' },
        { value: time, name: 'Time' }
      ]

      for (let field of fields) {
        if (field.value.trim().length === 0) {
          return Alert.alert('New Meal', `${field.name} cannot be empty.`)
        }
      }

      const newMeal = {
        title,
        description,
        date,
        time,
        isOnDiet
      }

      await createMeal(newMeal)
      setTime('')
      setDate('')
      setTitle('')
      setDescription('')
      navigation.navigate('feedback', { isOnDiet })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New Meal', error.message)
      } else {
        Alert.alert('New Meal', 'It was not possible to create a new meal.')
      }
    }
  }

  const handleEditMeal = async () => {
    try {
      const fields = [
        { value: title, name: 'Title' },
        { value: description, name: 'Description' },
        { value: date, name: 'Date' },
        { value: time, name: 'Time' }
      ]

      for (let field of fields) {
        if (field.value.trim().length === 0) {
          return Alert.alert('New Meal', `${field.name} cannot be empty.`)
        }
      }

      const editedMeal = {
        title,
        description,
        date,
        time,
        isOnDiet
      }

      await editMeal(meal, editedMeal)
      setTime('')
      setDate('')
      setTitle('')
      setDescription('')
      navigation.navigate('feedback', { isOnDiet })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New Meal', error.message)
      } else {
        Alert.alert('New Meal', 'It was not possible to create a new meal.')
      }
    }
  }

  useEffect(() => {
    if (meal) {
      setIsOnDiet(meal.isOnDiet)
      setTitle(meal.title)
      setDescription(meal.description)
      setDate(meal.date)
      setTime(meal.time)
    }
  }, [meal])

  return {
    COLORS,
    meal,
    isOnDiet,
    setIsOnDiet,
    handleCreateMeal,
    handleEditMeal,
    setTitle,
    setDescription,
    setDate,
    setTime,
    title,
    description,
    date,
    time
  }
}

export default useMealFormController
