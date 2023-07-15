import { useState, useEffect } from "react";
import apiClients from "../services/api-clients";
import {AxiosRequestConfig, CanceledError} from "axios"

interface FetchResponse<T>{
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string,requestConfig ?: AxiosRequestConfig,deps ?: any[]) => {
    const [data,setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClients.get<FetchResponse<T>>(endpoint, { signal: controller.signal,...requestConfig })
            .then(res => {
                setLoading(false);
                setData(res.data.results);
            })
            .catch(err => {
                setLoading(false);
                if (err instanceof CanceledError) return;
                setError(err.message);
                console.log(err.message);
            });
        return () => controller.abort();
        
    }, deps? [...deps]:[]);//end useEffect

    return { data, error, isLoading };
}

export default useData;

