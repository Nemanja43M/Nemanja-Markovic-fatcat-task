import React from 'react';
import './styles.css';

import { z } from 'zod';

import { createItem, userList } from './apis/apis';
import { CreateForm } from './components/CreateForm';
import { Landing } from './components/landing/Landing';
import List from './components/List';
import { User } from './models/ComponentsModel';

const schema = z.object({
    title: z.string().min(2).max(20),
    body: z.string().min(2).max(50),
});

const App: React.FC = () => {
    return (
        <main>
            <CreateForm
                validationSchema={schema}
                getEndpointObj={createItem}
                renderForm={(register) => (
                    <>
                        <div>
                            <input
                                type="text"
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                                {...register('title')}
                                placeholder="Title"
                            />
                            {/* {errors.title && errors.title.message} */}
                        </div>
                        <div>
                            <textarea
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                                {...register('body')}
                                placeholder="Description"
                            ></textarea>
                            {/* {errors.body && errors.body.message} */}
                        </div>
                        <button type="submit">Save</button>
                    </>
                )}
            />
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
