import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClients from "../services/api-clients";
import { FetchResponse } from "../services/api-clients";

export interface Platform{
    id: number;
    name: string;
    slug: string;

}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>,Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClients
        .get<FetchResponse<Game>>('/games', {
            params:{
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.parent_platforms?.id,
                search: gameQuery.searchText,
                ordering: gameQuery.sortOrder
            },
        })
        .then(res => res.data),
});

export default useGames;