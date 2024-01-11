import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

interface Game {
  id: number,
  name: string,
}

interface FetchGamesResponse {
  count: number,
  results: Game[],
}

const GameGrid = () => {
  const [games, setGames] =useState<Game[]>([])
  const [errors, setErrors] = useState("")
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // setIsLoading(true)
    apiClient.get<FetchGamesResponse>("/games").then(res => {
      setGames(res.data.results)})
      .catch(err => setErrors(err.message))
    // setIsLoading(false)
  }, []);

  return (
  <ul>
    { errors && <Text>{errors}</Text>}
    { games.map(game => <li key={game.id}>{game.id} - {game.name}</li>)}
  </ul>
  )
}

export default GameGrid