import { JSX } from 'react';
import Title from '@/components/Title';

export default function Works(): JSX.Element {
    return (
        <section id="works">
            <div className="px-6 md:px-8 py-16 md:py-24 bg-linear-180 from-[var(--primary)]/20 to-[var(--background)]">
                <div className="max-w-7xl mx-auto">
                    <Title id="my-works-title" text="My Works" />
                </div>
            </div>
        </section>
    );
}
