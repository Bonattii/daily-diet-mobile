import { Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'

import {
  Container,
  ContentContainer,
  Subtitle,
  Description,
  Title,
  DietInfo,
  Circle,
  DietInfoText,
  ModalButtonsContainer,
  ModalContentContainer,
  CenteredContainer
} from './styles'
import useMealController from './controller'

import Button from 'components/Button'
import HeaderNavigation from 'components/HeaderNavigation'

const Meal = () => {
  const {
    COLORS,
    meal,
    modalVisible,
    setModalVisible,
    handleNavigateToEditMeal
  } = useMealController()

  return (
    <>
      <Container type={meal.isOnDiet ? 'SUCCESS' : 'ERROR'} edges={['top']}>
        <HeaderNavigation title="Meal" />

        <ContentContainer>
          <Title>{meal.title}</Title>
          <Description>{meal.description}</Description>

          <Subtitle>Date and time</Subtitle>
          <Description>
            {meal.date} at {meal.time}
          </Description>

          <DietInfo>
            <Circle type={meal.isOnDiet ? 'SUCCESS' : 'ERROR'} />

            <DietInfoText>
              {meal.isOnDiet ? 'on diet' : 'not on diet'}
            </DietInfoText>
          </DietInfo>

          <Button
            title="Edit meal"
            style={{ marginTop: 'auto' }}
            onPress={() => handleNavigateToEditMeal(meal)}
          >
            <PencilSimpleLine size={18} color={COLORS.WHITE} />
          </Button>

          <Button
            title="Delete meal"
            type="SECONDARY"
            style={{ marginTop: 8 }}
            onPress={() => setModalVisible(true)}
          >
            <Trash size={18} color={COLORS.GRAY_100} />
          </Button>
        </ContentContainer>
      </Container>

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible((prev) => !prev)}
      >
        <CenteredContainer>
          <ModalContentContainer>
            <Title style={{ textAlign: 'center' }}>
              Do you really want to delete this meal record?
            </Title>

            <ModalButtonsContainer>
              <Button
                title="Cancel"
                type="SECONDARY"
                style={{ flex: 1 }}
                onPress={() => setModalVisible(false)}
              />
              <Button title="Yes, delete" style={{ flex: 1 }} />
            </ModalButtonsContainer>
          </ModalContentContainer>
        </CenteredContainer>
      </Modal>

      <SafeAreaView
        edges={['bottom']}
        style={{ backgroundColor: COLORS.GRAY_700 }}
      />
    </>
  )
}

export default Meal
