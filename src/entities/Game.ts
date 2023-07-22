import Genre  from "./Genre";
import Platform  from "./Platform";
import Publisher  from "./Publisher";

export default interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    description_raw: string;
    publishers: Publisher[];
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    platforms: Platform[];
    metacritic: number;
    rating_top: number;
}
