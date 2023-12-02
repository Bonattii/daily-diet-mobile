import styled, { css } from 'styled-components/native'

import { ContainerProps } from './types'

export const Container = styled.View<ContainerProps>`
  align-items: center;
  justify-content: center;
  gap: 8px;

  max-height: ${({ type }) =>
    type === 'SUCCESS' || type === 'ERROR' ? '107px' : '90px'};
  min-height: ${({ type }) =>
    type === 'SUCCESS' || type === 'ERROR' ? '107px' : '90px'};

  border-radius: 8px;
  margin-bottom: 16px;
  flex: 1;

  background-color: ${({ theme, type }) => {
    if (type === 'SUCCESS') return theme.COLORS.GREEN_LIGHT
    if (type === 'ERROR') return theme.COLORS.RED_LIGHT
    return theme.COLORS.GRAY_600
  }};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`
