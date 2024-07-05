import React from 'react';
import './styles.css';

import { z } from 'zod';

import { createItem, userList } from './apis/apis';
import { CreateForm } from './components/CreateForm';
import { CreatePage } from './components/CreatePage';
import { Landing } from './components/landing/Landing';
import List from './components/List';
import { User } from './models/ComponentsModel';
import image2 from '../public/media/cats/cat_2.png';
import image3 from '../public/media/cats/cat_3.png';
import image4 from '../public/media/cats/cat_4.png';
import heroImage from '../public/media/cats/cat_5.png';
import image1 from '../src/img/cats/cat_1.png';

const schema = z.object({
    title: z.string().min(2).max(20),
    body: z.string().min(2).max(50),
});

const App: React.FC = () => {
    return (
        <main>
            <Landing />
            <CreatePage
                pageLayout={[
                    {
                        type: 'sectionLayout',
                        components: [
                            {
                                type: 'componentHero',
                                props: {
                                    title: 'This is new hero section :D',
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                    image: heroImage,
                                },
                            },
                        ],
                        props: { background: 'text-primary bg-black' },
                    },
                    {
                        type: 'sectionLayout',
                        components: [
                            {
                                type: 'componentTrustBar',
                                props: {
                                    images: [image1, image2, image3, image4],
                                },
                            },
                        ],
                        props: { background: 'bg-mainYellow' },
                    },
                ]}
            />
            <List
                endpointObj={userList}
                renderItem={(item: User) => (
                    <div>
                        {item.id} {item.name} {item.username} {item.email}
                        {item.phone}
                    </div>
                )}
            />
            <CreateForm
                validationSchema={schema}
                getEndpointObj={createItem}
                renderForm={(register) => (
                    <>
                        <div>
                            <input
                                className="form-input"
                                type="text"
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                                {...register('title')}
                                placeholder="Title"
                            />
                            {/* {errors.title && errors.title.message} */}
                        </div>
                        <div>
                            <textarea
                                className="textarea-input"
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                                {...register('body')}
                                placeholder="Description"
                            ></textarea>
                            {/* {errors.body && errors.body.message} */}
                        </div>
                        <button className="form-btn" type="submit">
                            Save
                        </button>
                    </>
                )}
            />
        </main>
    );
};

export default App;
