import React from 'react';

import clsx from 'clsx';

import { LayoutProps } from '../models/ComponentsModel';

export const Layout: React.FC<LayoutProps> = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
