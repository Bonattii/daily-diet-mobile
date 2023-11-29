import { Circle, Container, Time, TimeContainer, Title } from './styles'
import { MealButtonProps } from './types'

const MealButton = ({ title, time, isOnDiet, ...rest }: MealButtonProps) => {
  return (
    <Container {...rest}>
      <TimeContainer>
        <Time>{time}</Time>
      </TimeContainer>

      <Title>{title}</Title>

      <Circle isOnDiet={isOnDiet} />
    </Container>
  )
}

export default MealButton
