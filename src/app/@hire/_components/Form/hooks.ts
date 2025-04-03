import { useState, Dispatch, SetStateAction } from 'react';
import { z } from 'zod';
import { toast } from 'react-toastify';
import hireForm from '@/zodSchema/hireForm';
import { useFormReturn } from './types';

export function useForm(): useFormReturn {
    const [ name, setName ]: [ string, Dispatch<SetStateAction<string>> ] = useState('');
    const [ email, setEmail ]: [ string, Dispatch<SetStateAction<string>> ] = useState('');
    const [ phone, setPhone ]: [ string, Dispatch<SetStateAction<string>> ] = useState('');
    const [ message, setMessage ]: [ string, Dispatch<SetStateAction<string>> ] = useState('');
    const [ error, setError ]: [ { [key: string]: string }, Dispatch<SetStateAction<{ [key: string]: string }>> ] = useState({});
    const [ isSubmitting, setIsSubmitting ]: [ boolean, Dispatch<SetStateAction<boolean>> ] = useState(false);

    function onSubmit(): void {
        if (!isSubmitting) {
            try {
                setIsSubmitting(true);
                setError({});

                type HireForm = z.infer<typeof hireForm>;
                const parsed: HireForm = hireForm.parse({
                    name: typeof (name) !== 'string' || name ? name : undefined,
                    email: typeof (email) !== 'string' || email ? email : undefined,
                    phone: typeof (phone) !== 'string' || phone ? phone : undefined,
                    message: typeof (message) !== 'string' || message ? message : undefined,
                });

                toast.error('Message sent!');
                console.log(parsed);
            } catch (error) {
                if (error instanceof z.ZodError) {
                    const errors: { [x: string]: string[] | undefined } = error.flatten().fieldErrors;
                    const errorMessages: { [key: string]: string } = Object.keys(errors).reduce((messages, key) => ({ ...messages, [key]: errors[key] }), {});
                    setError(errorMessages);
                }
            } finally {
                setIsSubmitting(false);
            }
        }
    }

    return {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        message,
        setMessage,
        error,
        isSubmitting,
        onSubmit,
    };
}
