import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CircleProps, ContainerProps } from './types'

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-top: 16px;
  margin-bottom: 32px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const DietInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 8px;
  border-radius: 999px;

  max-width: 144px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Circle = styled.View<CircleProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) =>
    type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const DietInfoText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const CenteredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: 'rgba(0, 0, 0, 0.5)';
`

export const ModalContentContainer = styled.View`
  margin: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  padding: 32px 24px;
  align-items: center;
`

export const ModalButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`
