import { FlatList, Image } from 'react-native'
import {
  ButtonContainerText,
  ButtonContainer,
  Container,
  HomeHeader,
  MealDate,
  MealContainer
} from './styles'
import { Plus } from 'phosphor-react-native'

import logoImg from 'assets/logo.png'
import userImg from 'assets/user.png'

import Button from 'components/Button'
import HomeHighlight from 'components/HomeHighlight'
import ListEmpty from 'components/ListEmpty'
import MealButton from 'components/MealButton'
import Loading from 'components/Loading'
import useHomeController from './controller'

const Home = () => {
  const { meals, isLoading, handleOpenStatistics } = useHomeController()

  return (
    <Container>
      <HomeHeader>
        <Image source={logoImg} />
        <Image source={userImg} />
      </HomeHeader>

      <HomeHighlight title="90.53%" onPress={handleOpenStatistics} />

      <ButtonContainer>
        <ButtonContainerText>Meals</ButtonContainerText>

        <Button title="New meal">
          <Plus size={18} color="#fff" />
        </Button>
      </ButtonContainer>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.date}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <MealContainer>
              <MealDate>{item.date}</MealDate>

              {item.mealInfo.map((meal) => (
                <MealButton
                  key={`${meal.time}-${meal.title}`}
                  time={meal.time}
                  title={meal.title}
                  isOnDiet={meal.isOnDiet}
                />
              ))}
            </MealContainer>
          )}
          contentContainerStyle={
            meals.length === 0 ? { flex: 1 } : { paddingBottom: 50 }
          }
          ListEmptyComponent={() => (
            <ListEmpty message="Any record availabe, start creating now!" />
          )}
        />
      )}
    </Container>
  )
}

export default Home
