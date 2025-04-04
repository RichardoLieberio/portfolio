'use client';

import { useRef, JSX, RefObject } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import TechSlider from '../TechSlider';

type TechCardProps = {
    category: string;
    skills: { tool: string, skill: number }[];
};

export default function TechCard({ category, skills }: TechCardProps): JSX.Element {
    const ref: RefObject<HTMLLIElement | null> = useRef<HTMLLIElement>(null);
    const inView: boolean = useInView(ref, { once: false, margin: '0px 0px 0px 0px' });

    const variants: Variants = {
        hidden: { y: 40, opacity: 0, scale: 0.95 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    };

    return (
        <motion.li ref={ ref } initial="hidden" animate={ inView ? 'visible' : 'hidden' } variants={ variants } tabIndex={ 0 } role="listitem" className="w-full h-full max-w-96 sm:max-w-none p-8 bg-white border border-[var(--border)] rounded-xl transition hover:border-[var(--primary)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]">
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
        </motion.li>
    );
}
