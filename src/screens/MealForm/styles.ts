import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'
import { CircleProps } from './types'

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px;
`

export const FormContainer = styled.View`
  gap: 6px;
  margin-bottom: 32px;
`

export const FormText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`

const TextInputAux = styled.TextInput`
  border-radius: 8px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const CustomTextInput = styled(TextInputAux)`
  min-height: 48px;
  max-height: 48px;
`

export const CustomTextArea = styled(TextInputAux)`
  min-height: 120px;
  max-height: 120px;
`

export const InsideDietButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-height: 50px;
  max-height: 50px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Circle = styled.View<CircleProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) =>
    type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
