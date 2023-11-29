import { View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from './app.routes'

const Routes = () => {
  const { COLORS } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_700 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}

export default Routes