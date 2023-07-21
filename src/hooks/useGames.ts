import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games')
const useGames = () => { 
    const gameQuery = useGameQueryStore(s => s.gameQuery)

   return  useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.parent_platformId,
                search: gameQuery.searchText,
                ordering: gameQuery.sortOrder
            }
        }) ,
    });
}

export default useGames;