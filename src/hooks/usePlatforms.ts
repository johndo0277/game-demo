import { useQuery } from "@tanstack/react-query";

import { Platform } from "./useGames";
import apiClients, { FetchResponse } from "../services/api-clients";


const usePlatforms = () => useQuery({
    queryKey: ['platfrom'],
    queryFn: () => apiClients.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),

    staleTime: 24 * 60 * 60 * 1000, // 24h,

});


export default usePlatforms