'use client';

import { Dispatch, SetStateAction, JSX } from 'react';

type InputProps = {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    label: string;
    required?: boolean;
    error?: string;
    props: { [key: string]: string | boolean };
}

export default function Input({ value, setValue, label, required, error, props }: InputProps): JSX.Element {
    return (
        <div className="w-full max-w-xl md:max-w-none flex flex-col md:flex-row gap-x-4">
            <div className="md:w-[138px] md:text-right">
                <label htmlFor={ label } className={ `${error && 'text-red-600'} w-fit` }>{ label } { required && <span className="text-red-600">*</span> }</label>
            </div>
            <div className="flex-1 flex flex-col">
                <input id={ label } value={ value } onChange={ (e) => setValue(e.target.value) } { ...props } className={ `${error ? 'border-red-600' : 'border-[var(--border)]'} w-full px-4 py-2 bg-white border rounded-md transition focus-visible:outline-[var(--primary)] disabled:bg-[var(--accent)] disabled:cursor-not-allowed` } />
                { error && <small className="text-xs md:text-sm text-red-600">{ error }</small> }
            </div>
        </div>
    );
}
