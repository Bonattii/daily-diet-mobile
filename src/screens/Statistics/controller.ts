import { useNavigation } from '@react-navigation/native'

const useStatisticsController = () => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.navigate('home')
  }

  return {
    handleGoBack
  }
}

export default useStatisticsController
