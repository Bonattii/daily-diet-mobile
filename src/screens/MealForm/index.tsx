import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import useMealFormController from './controller'
import {
  Circle,
  Container,
  ContentContainer,
  CustomTextArea,
  CustomTextInput,
  FormContainer,
  FormText,
  InsideDietButton
} from './styles'

import HeaderNavigation from 'components/HeaderNavigation'
import Button from 'components/Button'

const MealForm = () => {
  const {
    COLORS,
    meal,
    isOnDiet,
    setIsOnDiet,
    handleCreateMeal,
    handleEditMeal
  } = useMealFormController()

  return (
    <>
      <Container edges={['top']}>
        <HeaderNavigation title={meal ? 'Edit meal' : 'New meal'} />

        <ContentContainer>
          <FormContainer>
            <FormText>Name</FormText>
            <CustomTextInput />
          </FormContainer>

          <FormContainer>
            <FormText>Description</FormText>
            <CustomTextArea multiline={true} />
          </FormContainer>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 16
            }}
          >
            <FormContainer style={{ flex: 1 }}>
              <FormText>Date</FormText>
              <CustomTextInput />
            </FormContainer>

            <FormContainer style={{ flex: 1 }}>
              <FormText>Time</FormText>
              <CustomTextInput />
            </FormContainer>
          </View>

          <FormContainer>
            <FormText>It's inside the diet?</FormText>

            <View
              style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
            >
              <InsideDietButton
                style={{
                  borderWidth: 1,
                  borderColor: isOnDiet ? COLORS.GREEN_DARK : COLORS.GRAY_600,
                  backgroundColor: isOnDiet
                    ? COLORS.GREEN_LIGHT
                    : COLORS.GRAY_600
                }}
                onPress={() => setIsOnDiet(true)}
              >
                <Circle type="SUCCESS" />
                <FormText>Yes</FormText>
              </InsideDietButton>

              <InsideDietButton
                style={{
                  borderWidth: 1,
                  borderColor: !isOnDiet ? COLORS.RED_DARK : COLORS.GRAY_600,
                  backgroundColor: !isOnDiet
                    ? COLORS.RED_LIGHT
                    : COLORS.GRAY_600
                }}
                onPress={() => setIsOnDiet(false)}
              >
                <Circle type="ERROR" />
                <FormText>No</FormText>
              </InsideDietButton>
            </View>
          </FormContainer>

          <Button
            title="Register meal"
            style={{ marginTop: 'auto' }}
            onPress={meal ? handleEditMeal : handleCreateMeal}
          />
        </ContentContainer>
      </Container>

      <SafeAreaView
        edges={['bottom']}
        style={{ backgroundColor: COLORS.GRAY_700 }}
      />
    </>
  )
}

export default MealForm
