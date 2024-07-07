// eslint-disable-next-line import/named
import { FormikProps } from 'formik';
import * as Yup from 'yup';

export interface CardProps {
    title: string;
    text: string;
    link: string;
}
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}
export interface Card {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: () => void;
    buttonText: string;
}
export interface HeroProps {
    title: string;
    image: string;
}
export interface Item {
    title: string;
    description: string;
}
export interface LayoutProps {
    children: React.ReactNode;
    background: string;
}
export interface PanelItem {
    title: string;
    description: string;
    image: string;
}
export interface TrustBarProps {
    images: string[];
}
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

interface ComponentProps {
    type: string;
    props: {
        title?: string;
        image?: string;
        images?: string[];
    };
}
export interface CreatePageProps {
    pageLayout: {
        type: string;
        components?: ComponentProps[];
        props: {
            background: string;
        };
    }[];
}
export interface ListProps {
    endpointObj: { url: string; method: string; baseURL: string };
    renderItem: (item: User) => JSX.Element;
}
export interface ListItemProps {
    item: User;
    renderItem: (item: User) => JSX.Element;
}
export interface MyFormValues {
    title: string;
    body: string;
}
export interface FormActions {
    setSubmitting: (isSubmitting: boolean) => void;
    resetForm: () => void;
}
export interface FormGeneratorProps {
    validationSchema: Yup.ObjectSchema<MyFormValues>;

    renderForm: (
        formikProps: FormikProps<MyFormValues>,
        isFormSubmitted: boolean
    ) => JSX.Element;
}
