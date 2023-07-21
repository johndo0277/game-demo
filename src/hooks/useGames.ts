import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games')
export interface Game {
    id: number;
    name: string;
    slug: string;
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    platforms: Platform[];
    metacritic: number;
    rating_top: number;
}

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