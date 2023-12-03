export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      // TODO: ADD MEAL TYPE
      mealForm: {
        meal?: string
      }
      feedback: {
        isOnDiet: boolean
      }
    }
  }
}

// TODO: Add more routes
