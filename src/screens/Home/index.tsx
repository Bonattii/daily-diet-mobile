import { Image } from 'react-native'
import {
  ButtonContainer,
  ButtonContainerText,
  Container,
  HomeHeader
} from './styles'
import { Plus } from 'phosphor-react-native'

import logoImg from 'assets/logo.png'
import userImg from 'assets/user.png'

import Button from 'components/Button'
import HomeHighlight from 'components/HomeHighlight'

const Home = () => {
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
    </Container>
  )
}

export default Home
