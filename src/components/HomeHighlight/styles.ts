import { TouchableOpacity } from 'react-native'
import { ArrowUpRight } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

import { ContainerProps, IconProps } from './types'

export const Container = styled(TouchableOpacity)<ContainerProps>`
  background-color: ${({ theme, type }) =>
    type === 'ERROR' ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};

  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  margin-top: 32px;
  border-radius: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
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

export const Icon = styled(ArrowUpRight).attrs<IconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'ERROR' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK
  })
)`
  position: absolute;
  top: 10px;
  right: 10px;
`
