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
        <section className="section section-list-component flex justify-center items-center">
            {isLoading && !isError && <Loading />}
            {isError && <ErrorMessage />}
            <div className="grid grid-cols-2 gap-4 mt-4">
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
