import { ReactNode, JSX } from 'react';

type ServiceCard = {
    icon: ReactNode;
    title: string;
    text: string;
};

export default function ServiceCard({ icon, title, text }: ServiceCard): JSX.Element {
    return (
        <li tabIndex={ 0 } role="listitem" className="w-full h-full max-w-96 sm:max-w-none p-8 bg-white border border-[var(--border)] rounded-xl transition hover:border-[var(--primary)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]">
            <article aria-labelledby={ title.replace(/\s+/g, '-').toLowerCase() }>
                <span className="inline-block" aria-hidden="true">{ icon }</span>
                <h3 id={ title.replace(/\s+/g, '-').toLowerCase() } className="mt-6 font-semibold">{ title }</h3>
                <p id={ `${title.replace(/\s+/g, '-').toLowerCase()}-desc` } className="mt-2">{ text }</p>
            </article>
        </li>
    );
}
