import React from 'react';
import './styles.css';

import { userList } from './apis/apis';
import { Landing } from './components/landing/Landing';
import List from './components/List';
import { User } from './models/ComponentsModel';

const App: React.FC = () => {
    return (
        <main>
            <Landing />
            <List
                endpointObj={userList}
                renderItem={(item: User) => (
                    <div>
                        {item.id} {item.name} {item.username} {item.email}
                        {item.phone}
                    </div>
                )}
            />
        </main>
    );
};

export default App;
