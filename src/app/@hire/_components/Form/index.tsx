'use client';

import { useRef, JSX, RefObject } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Input from '../Input';
import TextArea from '../TextArea';
import { useForm } from './hooks';
import { useFormReturn } from './types';

export default function Form(): JSX.Element {
    const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const inView: boolean = useInView(ref, { once: false, margin: '0px 0px 0px 0px' });

    const {
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
    }: useFormReturn = useForm();

    const variants: Variants = {
        hidden: { y: 40, opacity: 0, scale: 0.95 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    };

    return (
        <motion.div ref={ ref } initial="hidden" animate={ inView ? 'visible' : 'hidden' } variants={ variants }>
            <form autoCapitalize="none" autoComplete="off" spellCheck="false">
                <div className="flex flex-col gap-4 items-center">
                    <Input value={ name } setValue={ setName } label="Name" required error={ error.name } props={{ type: 'text', disabled: isSubmitting }} />
                    <Input value={ email } setValue={ setEmail } label="Email" required error={ error.email } props={{ type: 'email', disabled: isSubmitting }} />
                    <Input value={ phone } setValue={ setPhone } label="Phone (Optional)" error={ error.phone } props={{ type: 'tel', disabled: isSubmitting }} />
                    <TextArea value={ message } setValue={ setMessage } label="Message" required error={ error.message } props={{ rows: '5', disabled: isSubmitting }} />
                </div>
                <div className="text-center">
                    <button onClick={ onSubmit } disabled={ isSubmitting } className="w-full max-w-96 mt-8 py-2 text-[var(--background)] bg-[var(--primary)] rounded-full transition hover:bg-[var(--primary)]/50 focus-visible:bg-[var(--primary)]/50 focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2 disabled:bg-[var(--primary)]/50 disabled:cursor-not-allowed">Submit</button>
                </div>
            </form>
        </motion.div>
    );
}
