import { Dispatch, SetStateAction } from 'react';

export type useFormReturn = {
    name: string,
    setName: Dispatch<SetStateAction<string>>,
    email: string,
    setEmail: Dispatch<SetStateAction<string>>,
    phone: string,
    setPhone: Dispatch<SetStateAction<string>>,
    message: string,
    setMessage: Dispatch<SetStateAction<string>>,
    error: { [key: string]: string },
    isSubmitting: boolean,
    onSubmit: () => void;
};

export type actionReturn = {
    status: number;
    msg: string;
};
