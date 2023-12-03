import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

const useStatisticsController = () => {
  const navigation = useNavigation()
  const { COLORS } = useTheme()

  const handleGoBack = () => {
    navigation.navigate('home')
  }

  return {
    handleGoBack,
    COLORS
  }
}

export default useStatisticsController
