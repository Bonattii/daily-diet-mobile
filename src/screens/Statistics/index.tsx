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
import Loading from 'components/Loading'

const Statistics = () => {
  const {
    handleGoBack,
    COLORS,
    isLoading,
    maxSequence,
    mealsOffDiet,
    mealsOnDiet,
    percentageOnDiet,
    totalMeals,
  } = useStatisticsController()

  return (
    <>
      <Container type="SUCCESS" edges={['top']}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <HeaderContainer>
              <BackButton onPress={handleGoBack}>
                <BackIcon type={percentageOnDiet > 80 ? 'SUCCESS' : 'ERROR'} />
              </BackButton>
              <Title>{percentageOnDiet.toString()}%</Title>
              <Subtitle>of the meals inside the diet</Subtitle>
            </HeaderContainer>

            <ContentContainer>
              <ContentTitle>General statistics</ContentTitle>

              <StatisticsBox
                title={maxSequence.toString()}
                subtitle="best sequence of meals inside of the diet"
              />
              <StatisticsBox
                title={totalMeals.toString()}
                subtitle="registered meals"
              />

              <ContentStatisticsContainer>
                <StatisticsBox
                  type="SUCCESS"
                  title={mealsOnDiet.toString()}
                  subtitle="meals inside of the diet"
                />
                <StatisticsBox
                  type="ERROR"
                  title={mealsOffDiet.toString()}
                  subtitle="meals outside the diet"
                />
              </ContentStatisticsContainer>
            </ContentContainer>
          </>
        )}
      </Container>

      <SafeAreaView
        edges={['bottom']}
        style={{ backgroundColor: COLORS.GRAY_700 }}
      />
    </>
  )
}

export default Statistics
