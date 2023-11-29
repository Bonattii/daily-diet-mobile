type HomeHighlightOptions = 'ERROR' | 'SUCCESS'

export type ContainerProps = {
  type: HomeHighlightOptions
}

export type IconProps = {
  type: HomeHighlightOptions
}

export type HomeHighlightProps = {
  title: string
  type?: HomeHighlightOptions
}
