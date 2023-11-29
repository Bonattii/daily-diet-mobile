import { useState } from 'react'
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

type MealList = {
  date: string
  mealInfo: {
    time: string
    title: string
    isOnDiet: boolean
  }[]
}

const Home = () => {
  const [meals, setMeals] = useState<MealList[]>([
    {
      date: '23.11.28',
      mealInfo: [
        {
          time: '08:00',
          title: 'Breakfast',
          isOnDiet: true
        },
        {
          time: '12:00',
          title: 'Lunch',
          isOnDiet: false
        },
        {
          time: '18:00',
          title: 'Dinner',
          isOnDiet: true
        }
      ]
    },
    {
      date: '23.11.29',
      mealInfo: [
        {
          time: '08:00',
          title: 'Breakfast',
          isOnDiet: true
        },
        {
          time: '12:00',
          title: 'Lunch',
          isOnDiet: false
        },
        {
          time: '18:00',
          title: 'Dinner',
          isOnDiet: true
        }
      ]
    },
    {
      date: '23.11.31',
      mealInfo: [
        {
          time: '08:00',
          title: 'Breakfast',
          isOnDiet: true
        },
        {
          time: '12:00',
          title: 'Lunch',
          isOnDiet: false
        },
        {
          time: '18:00',
          title: 'Dinner',
          isOnDiet: true
        }
      ]
    }
  ])

  const [isLoading, setIsLoading] = useState(false)

  return (
    <Container>
      <HomeHeader>
        <Image source={logoImg} />
        <Image source={userImg} />
      </HomeHeader>

      <HomeHighlight title="90.53%" />

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
