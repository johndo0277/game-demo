import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'db9a54f4d0f64131965028c560765541'
    }
});

class APIClient<T> {
    endpoint: string;
    
    constructor(endpoint: string){
        this.endpoint = endpoint;    
    }

    getAll = () => {
       return axiosInstance
            .get<T[]>(this.endpoint,)
            .then(res => res.data);
    }




}