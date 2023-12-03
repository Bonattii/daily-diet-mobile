import { TouchableOpacity } from 'react-native'
import useHeaderNavigationController from './controller'
import { BackIcon, Container, Title } from './styles'
import { HeaderNavigationProps } from './types'

const HeaderNavigation = ({ title }: HeaderNavigationProps) => {
  const { handleGoBack } = useHeaderNavigationController()

  return (
    <Container>
      <TouchableOpacity onPress={handleGoBack}>
        <BackIcon />
      </TouchableOpacity>

      <Title>{title}</Title>
    </Container>
  )
}

export default HeaderNavigation
