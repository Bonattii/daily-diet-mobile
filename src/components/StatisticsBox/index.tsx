import { Text } from 'react-native'
import { Container, Subtitle, Title } from './styles'
import { StatisticsBoxProps } from './types'

const StatisticsBox = ({
  type = 'DEFAULT',
  title,
  subtitle
}: StatisticsBoxProps) => {
  return (
    <Container type={type}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}

export default StatisticsBox
