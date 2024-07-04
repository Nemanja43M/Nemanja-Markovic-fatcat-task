import React from 'react';

import { User } from '../models/ComponentsModel';

interface ListItemProps {
    item: User;
    renderItem: (item: User) => JSX.Element;
}

const ListItem: React.FC<ListItemProps> = ({ item, renderItem }) => {
    return (
        <div className="list">
            {renderItem ? (
                renderItem(item)
            ) : (
                <>
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.username}</div>
                    <div>{item.email}</div>
                    <div>{item.phone}</div>
                </>
            )}
        </div>
    );
};

export default ListItem;
