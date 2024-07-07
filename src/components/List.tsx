import React, { useEffect } from 'react';

import ErrorMessage from './ErrorMessage';
import ListItem from './ListItem';
import Loading from './Loading';
import useFetchData from '../hooks/useFetchData';
import { ListProps } from '../models/ComponentsModel';

const List: React.FC<ListProps> = ({ endpointObj, renderItem }) => {
    const { fetchData, data, isLoading, isError } = useFetchData();

    useEffect(() => {
        const fetchDataAsync = async () => {
            if (endpointObj) {
                try {
                    await fetchData(endpointObj);
                } catch (error) {
                    error;
                }
            }
        };
        void fetchDataAsync();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="section section-list-component flex justify-center items-center min-h-screen">
            {isLoading && !isError && <Loading />}
            {isError && <ErrorMessage />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                {data?.length > 0 &&
                    data?.map((item, index) => (
                        <div
                            key={index}
                            className="item border border-gray-300 p-4 mb-4"
                        >
                            <ListItem item={item} renderItem={renderItem} />
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default List;
