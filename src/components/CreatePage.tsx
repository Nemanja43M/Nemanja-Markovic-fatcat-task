import React from 'react';

import { Hero } from './Hero';
import { Layout } from './Layout';
import { TrustBar } from './TrustBar';
import { CreatePageProps } from '../../src/models/ComponentsModel';

export const CreatePage: React.FC<CreatePageProps> = ({ pageLayout }) => {
    return (
        <>
            {pageLayout?.length > 0 &&
                pageLayout?.map((section, index) => {
                    if (section.type === 'sectionLayout') {
                        return (
                            <Layout key={index + 1} {...section.props}>
                                {section.components?.map((component, index) => {
                                    if (component?.type === 'componentHero') {
                                        return (
                                            <Hero
                                                title={''}
                                                image={''}
                                                key={index - 1}
                                                {...component.props}
                                            />
                                        );
                                    } else if (
                                        component?.type === 'componentTrustBar'
                                    ) {
                                        return (
                                            <TrustBar
                                                images={[]}
                                                key={index - 1}
                                                {...component.props}
                                            />
                                        );
                                    }
                                })}
                            </Layout>
                        );
                    }
                })}
        </>
    );
};
