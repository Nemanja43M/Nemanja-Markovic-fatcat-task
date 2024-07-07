import React from 'react';

import './styles.css';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';

import { userList } from './apis/apis';
import { CreatePage } from './components/CreatePage';
import FormGenerator from './components/FormGenerator';
import { Landing } from './components/landing/Landing';
import List from './components/List';
import { User } from './models/ComponentsModel';
import { Schema } from './models/ValidationSchema';
import image1 from '../src/media/cats/cat_1.png';
import image2 from '../src/media/cats/cat_2.png';
import image3 from '../src/media/cats/cat_3.png';
import image4 from '../src/media/cats/cat_4.png';
import heroImage from '../src/media/cats/cat_5.png';

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
            <FormGenerator
                validationSchema={Schema}
                renderForm={() => (
                    <>
                        <Field
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                        />
                        <FormikErrorMessage
                            name="title"
                            component="div"
                            className="error-message"
                        />

                        <Field
                            as="textarea"
                            id="body"
                            name="body"
                            placeholder="Body"
                        />
                        <FormikErrorMessage
                            name="body"
                            component="div"
                            className="error-message"
                        />
                    </>
                )}
            />
        </main>
    );
};

export default App;
