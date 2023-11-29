import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { CircleProps } from './types'

export const Container = styled(TouchableOpacity)`
  flex: 1;

  flex-direction: row;
  align-items: center;
  gap: 12px;

  padding: 14px 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`

export const TimeContainer = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-right-width: 1;
  border-bottom-width: 0;
  border-left-width: 0;
  border-top-width: 0;
  padding-right: 10px;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}

  flex: 1;
`

export const Circle = styled.View<CircleProps>`
  width: 14px;
  height: 14px;

  border-radius: 999px;

  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
