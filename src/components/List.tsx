import React, { useEffect } from 'react';

import ErrorMessage from './ErrorMessage';
import ListItem from './ListItem';
import Loading from './Loading';
import useFetchData from '../hooks/useFetchData';
import { User } from '../models/ComponentsModel';

interface ListProps {
    endpointObj: { url: string; method: string; baseURL: string };
    renderItem: (item: User) => JSX.Element;
}

const List: React.FC<ListProps> = ({ endpointObj, renderItem }) => {
    const { fetchData, data, isLoading, isError } = useFetchData();

    useEffect(() => {
        const fetchDataAsync = async () => {
            if (endpointObj) {
                try {
                    await fetchData(endpointObj);
                } catch (error) {
                    // eslint-disable-next-line
                    console.log(error);
                }
            }
        };

        void fetchDataAsync();
        // eslint-disable-next-line
    }, []);

    return (
        <section>
            {isLoading && !isError && <Loading />}
            {isError && <ErrorMessage />}
            {data?.length > 0 &&
                data?.map((item, index) => (
                    <ListItem key={index} item={item} renderItem={renderItem} />
                ))}
        </section>
    );
};

export default List;
