import { JSX } from 'react';
import Title from '@/components/Title';
import Form from './_components/Form';

export default function Hire(): JSX.Element {
    return (
        <section id="hire" className="max-w-7xl mx-auto" aria-labelledby="hire-me-title">
            <Title id="hire-me-title" text="Hire Me" />
            <div className="mt-12 md:mt-16">
                <Form />
            </div>
        </section>
    );
}
