type StatisticsProps = 'SUCCESS' | 'ERROR' | 'DEFAULT'

export type ContainerProps = {
  type: StatisticsProps
}

export type StatisticsBoxProps = {
  type?: StatisticsProps
  title: string
  subtitle: string
}
