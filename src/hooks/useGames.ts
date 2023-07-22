import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import Game  from "../entities/Game";

const apiClient = new APIClient<Game>('/games')
const useGames = () => { 
    const gameQuery = useGameQueryStore(s => s.gameQuery)

   return  useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) =>
            apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.parent_platformId,
                search: gameQuery.searchText,
                ordering: gameQuery.sortOrder,
                page: pageParam,
            }
            }),
       getNextPageParam: (lastPage, allPages) => {
           return lastPage.next? allPages.length + 1 : undefined;
        }
    });
}

export default useGames;