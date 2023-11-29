import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
`

export const HomeHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ButtonContainer = styled.View`
  margin-top: 40px;
  gap: 12px;
`

export const ButtonContainerText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`
