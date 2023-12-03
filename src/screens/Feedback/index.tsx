import onDiet from 'assets/onDiet.png'
import offDiet from 'assets/offDiet.png'

import useFeedbackController from './controller'
import { Container, CustomImage, Description, Title } from './styles'

import Button from 'components/Button'

const Feedback = () => {
  const { handleNavigateToHome, isOnDiet, FONT_FAMILY } =
    useFeedbackController()

  return (
    <Container>
      <Title type={isOnDiet ? 'SUCCESS' : 'ERROR'}>
        {isOnDiet ? 'Keep going!' : 'Too bad!'}
      </Title>

      {isOnDiet ? (
        <Description>
          You continue{' '}
          <Description style={{ fontFamily: FONT_FAMILY.BOLD }}>
            on the diet
          </Description>
          . Very good!
        </Description>
      ) : (
        <Description>
          You're{' '}
          <Description style={{ fontFamily: FONT_FAMILY.BOLD }}>
            off the diet
          </Description>{' '}
          this time, but keep trying and don't give up!
        </Description>
      )}

      {isOnDiet ? (
        <CustomImage source={onDiet} />
      ) : (
        <CustomImage source={offDiet} />
      )}

      <Button title="Go to the home page" onPress={handleNavigateToHome} />
    </Container>
  )
}

export default Feedback
