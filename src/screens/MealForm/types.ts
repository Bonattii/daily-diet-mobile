import { Meal } from 'src/@types/meal'

export type RouteParams = {
  meal: Meal
}

export type CircleProps = {
  type: 'SUCCESS' | 'ERROR'
}
