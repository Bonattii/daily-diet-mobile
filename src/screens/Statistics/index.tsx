import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'

import {
  Container,
  BackButton,
  BackIcon,
  Title,
  HeaderContainer,
  Subtitle,
  ContentContainer
} from './styles'
import useStatisticsController from './controller'

const Statistics = () => {
  const { handleGoBack } = useStatisticsController()
  const { COLORS } = useTheme()

  return (
    <>
      <Container type="SUCCESS" edges={['top']}>
        <HeaderContainer>
          <BackButton onPress={handleGoBack}>
            <BackIcon type="SUCCESS" />
          </BackButton>
          <Title>90.53%</Title>
          <Subtitle>of the meals inside the diet</Subtitle>
        </HeaderContainer>

        <ContentContainer>
          <Text>adfads</Text>
        </ContentContainer>
      </Container>

      <SafeAreaView
        edges={['bottom']}
        style={{ backgroundColor: COLORS.GRAY_700 }}
      />
    </>
  )
}

export default Statistics
