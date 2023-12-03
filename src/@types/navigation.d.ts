import { Meal } from './meal'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      mealForm: {
        meal?: Meal
      }
      feedback: {
        isOnDiet: boolean
      }
      meal: {
        meal: Meal
      }
    }
  }
}
