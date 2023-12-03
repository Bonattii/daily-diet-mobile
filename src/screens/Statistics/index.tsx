import { SafeAreaView } from 'react-native-safe-area-context'

import {
  Container,
  BackButton,
  BackIcon,
  Title,
  HeaderContainer,
  Subtitle,
  ContentContainer,
  ContentTitle,
  ContentStatisticsContainer
} from './styles'
import useStatisticsController from './controller'
import StatisticsBox from 'components/StatisticsBox'

const Statistics = () => {
  const { handleGoBack, COLORS } = useStatisticsController()

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
          <ContentTitle>General statistics</ContentTitle>

          <StatisticsBox
            title="4"
            subtitle="best sequence of meals inside of the diet"
          />
          <StatisticsBox title="109" subtitle="registered meals" />

          <ContentStatisticsContainer>
            <StatisticsBox
              type="SUCCESS"
              title="32"
              subtitle="meals inside of the diet"
            />
            <StatisticsBox
              type="ERROR"
              title="77"
              subtitle="meals outside the diet"
            />
          </ContentStatisticsContainer>
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
