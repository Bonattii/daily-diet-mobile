import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Feedback from 'screens/Feedback'

import Home from 'screens/Home'
import Meal from 'screens/Meal'
import MealForm from 'screens/MealForm'
import Statistics from 'screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

// TODO: Add the other screens here
const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="meal" component={Meal} />
      <Screen name="mealForm" component={MealForm} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  )
}

export default AppRoutes
