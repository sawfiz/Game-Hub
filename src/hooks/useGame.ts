import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Allow us to cancel aync operations
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        // Removes the error in strict mode, as the component is rendered twice
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });
    // setIsLoading(false)
  }, []);

  return { games, errors };
};

export default useGame;
