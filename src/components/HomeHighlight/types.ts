import { TouchableOpacityProps } from 'react-native'

type HomeHighlightOptions = 'ERROR' | 'SUCCESS'

export type ContainerProps = {
  type: HomeHighlightOptions
}

export type IconProps = {
  type: HomeHighlightOptions
}

export type HomeHighlightProps = TouchableOpacityProps & {
  title: string
  type?: HomeHighlightOptions
}
