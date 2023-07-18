import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[];
}
export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'db9a54f4d0f64131965028c560765541'
    }
});