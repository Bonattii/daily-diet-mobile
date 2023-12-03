import { Meal } from 'src/@types/meal'

export type RouteParams = {
  meal: Meal
}

export type ContainerProps = {
  type: 'SUCCESS' | 'ERROR'
}

export type CircleProps = {
  type: 'SUCCESS' | 'ERROR'
}
