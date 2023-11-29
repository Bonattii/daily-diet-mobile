import { TouchableOpacityProps } from 'react-native'

type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

export type ContainerProps = { type: ButtonTypeStyleProps }

export type TitleProps = { type: ButtonTypeStyleProps }

export type ButtonProps = TouchableOpacityProps & {
  children: React.JSX.Element
  title: string
  type?: ButtonTypeStyleProps
}
