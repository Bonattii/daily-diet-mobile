import { Container, Icon, Subtitle, Title } from './styles'
import { HomeHighlightProps } from './types'

const HomeHighlight = ({ title, type = 'SUCCESS' }: HomeHighlightProps) => {
  return (
    <Container type={type}>
      <Title>{title}</Title>
      <Subtitle>
        {type === 'SUCCESS'
          ? 'of the meals inside the diet'
          : 'of the meals outside the diet'}
      </Subtitle>
      <Icon type={type} />
    </Container>
  )
}

export default HomeHighlight
