import React from 'react';

import { ListItemProps } from '../models/ComponentsModel';

const ListItem: React.FC<ListItemProps> = ({ item }) => {
    return (
        <div className="p-4">
            <div>ID: {item.id}</div>
            <div>Name: {item.name}</div>
            <div>Username: {item.username}</div>
            <div> {item.email}</div>
            <div>Phone: {item.phone}</div>
        </div>
    );
};

export default ListItem;
