import { useState } from 'react';

import axios from 'axios';

import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import { User } from '../models/ComponentsModel';

interface RequestOptions extends AxiosRequestConfig {
    body?: object;
}

const useFetchData = () => {
    const [data, setData] = useState<User[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async (requestOptions: RequestOptions): Promise<void> => {
        try {
            setIsLoading(true);
            setIsError(false);

            const response: AxiosResponse<User[]> =
                await axios.request(requestOptions);
            setData(response?.data);
            // eslint-disable-next-line
            console.log(response.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
        }
    };

    return {
        data,
        isLoading,
        isError,
        fetchData,
    };
};

export default useFetchData;
