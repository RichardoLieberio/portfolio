import { JSX } from 'react';
import TechSlider from '../TechSlider';

type TechCardProps = {
    category: string;
    skills: { tool: string, skill: number }[];
};

export default function TechCard({ category, skills }: TechCardProps): JSX.Element {
    return (
        <li tabIndex={ 0 } role="listitem" className="w-full h-full max-w-96 sm:max-w-none p-8 bg-white border border-[var(--border)] rounded-xl transition hover:border-[var(--primary)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]">
            <article>
                <h3 className="text-center font-semibold">{ category }</h3>
                <ul className="mt-6 space-y-4" role="list">
                    { skills.map(({ tool, skill }: { tool: string, skill: number }) => (
                        <li key={ tool }>
                            <TechSlider tool={ tool } skill={ skill } />
                        </li>
                    )) }
                </ul>
            </article>
        </li>
    );
}
