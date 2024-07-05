// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import {
    FieldValues,
    FormState,
    UseFormRegister,
    useForm,
    SubmitHandler,
} from 'react-hook-form';
import { ZodObject, ZodRawShape } from 'zod';

import useFetchData from '../hooks/useFetchData';

interface CreateFormProps<T extends FieldValues> {
    renderForm: (
        register: UseFormRegister<T>,
        errors: FormState<T>['errors']
    ) => JSX.Element;
    validationSchema: ZodObject<ZodRawShape>;
    getEndpointObj: (body: object) => object;
}

export const CreateForm = <T extends FieldValues>({
    renderForm,
    validationSchema,
    getEndpointObj,
}: CreateFormProps<T>): JSX.Element => {
    const { fetchData } = useFetchData();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {
        register,
        handleSubmit,
        formState: { errors },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    } = useForm<T>({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        resolver: zodResolver(validationSchema),
    });

    const handleFormSubmit: SubmitHandler<T> = async (data) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const requestInfo = getEndpointObj(data);
        await fetchData(requestInfo);
    };

    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {renderForm && renderForm(register, errors)}
        </form>
    );
};
