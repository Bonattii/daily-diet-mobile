import { Container, Title } from './styles'
import { ButtonProps } from './types'

const Button = ({
  title,
  type = 'PRIMARY',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Container type={type} {...rest}>
      {children}
      <Title type={type}>{title}</Title>
    </Container>
  )
}

export default Button
