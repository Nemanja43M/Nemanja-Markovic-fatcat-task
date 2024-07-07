import React, { useState } from 'react';

import { Form, Formik } from 'formik';

import {
    FormActions,
    FormGeneratorProps,
    MyFormValues,
} from '../../src/models/ComponentsModel';
import useFetchData from '../hooks/useFetchData';

const FormGenerator: React.FC<FormGeneratorProps> = ({
    validationSchema,
    renderForm,
}) => {
    const initialValues: MyFormValues = { title: '', body: '' };
    const { isLoading, isError, fetchData } = useFetchData();
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const handleSubmit = async (
        values: MyFormValues,
        actions: FormActions
    ): Promise<void> => {
        const requestOptions = {
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: values,
        };
        try {
            await fetchData(requestOptions);
            setIsFormSubmitted(true);
            actions.resetForm();
        } catch (error) {
            error;
        } finally {
            actions.setSubmitting(false);
        }
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg section-form-component">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(formikProps) => (
                        <Form className="flex flex-col space-y-4">
                            {renderForm(formikProps, isFormSubmitted)}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="form-btn"
                            >
                                Submit
                            </button>
                            {isLoading && (
                                <div className="text-center text-gray-500">
                                    Loading...
                                </div>
                            )}
                            {isError && (
                                <div className="text-center text-red-500">
                                    Error: Failed to submit form.
                                </div>
                            )}
                            {!isLoading && !isError && isFormSubmitted && (
                                <div className="text-center text-green-500">
                                    Form submitted successfully!
                                </div>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default FormGenerator;
