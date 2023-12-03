import { Container, Icon, Subtitle, Title } from './styles'
import { HomeHighlightProps } from './types'

const HomeHighlight = ({
  title,
  type = 'SUCCESS',
  ...rest
}: HomeHighlightProps) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
      <Subtitle>of the meals inside of the diet</Subtitle>
      <Icon type={type} />
    </Container>
  )
}

export default HomeHighlight
