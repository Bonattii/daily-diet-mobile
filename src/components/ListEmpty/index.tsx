import { Container, Message } from './styles'
import { ListEmptyProps } from './types'

const ListEmpty = ({ message }: ListEmptyProps) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}

export default ListEmpty
