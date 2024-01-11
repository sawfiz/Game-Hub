import { Text } from '@chakra-ui/react'
import useGame from '../hooks/useGame'

const GameGrid = () => {
  const {games, errors} = useGame();

  return (
  <ul>
    { errors && <Text>{errors}</Text>}
    { games.map(game => <li key={game.id}>{game.name}</li>)}
  </ul>
  )
}

export default GameGrid