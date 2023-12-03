import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { BackIconProps, ContainerProps } from './types'

export const Container = styled(SafeAreaView)<ContainerProps>`
  background-color: ${({ theme, type }) =>
    type === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  flex: 1;
  /* padding: 24px; */
`

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  align-self: start;
  margin-left: 24px;
`

export const BackIcon = styled(ArrowLeft).attrs<BackIconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  })
)``

export const HeaderContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  z-index: 1;
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

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px;
`

export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}

  align-self: center;
  margin-bottom: 32px;
`

export const ContentStatisticsContainer = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`
