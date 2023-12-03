import { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { RouteParams } from './types'

const useMealController = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const { COLORS } = useTheme()
  const route = useRoute()

  const { meal } = route.params as RouteParams

  return {
    COLORS,
    meal,
    modalVisible,
    setModalVisible
  }
}

export default useMealController
