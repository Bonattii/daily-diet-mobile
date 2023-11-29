import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

import { ContainerProps, TitleProps } from './types'

export const Container = styled(TouchableOpacity)<ContainerProps>`
  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_200 : 'transparent'};

  border: ${({ theme, type }) =>
    type === 'SECONDARY' && `1px solid ${theme.COLORS.GRAY_100}`};

  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const Title = styled.Text<TitleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
