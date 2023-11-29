import { TouchableOpacityProps } from 'react-native'

export type CircleProps = {
  isOnDiet: boolean
}

export type MealButtonProps = TouchableOpacityProps & {
  time: string
  title: string
  isOnDiet: boolean
}
