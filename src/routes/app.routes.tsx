import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from 'screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

// TODO: Add the other screens here
const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
    </Navigator>
  )
}

export default AppRoutes
