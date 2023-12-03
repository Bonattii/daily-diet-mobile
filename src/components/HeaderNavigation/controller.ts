import { useNavigation } from '@react-navigation/native'

const useHeaderNavigationController = () => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return {
    handleGoBack
  }
}

export default useHeaderNavigationController
