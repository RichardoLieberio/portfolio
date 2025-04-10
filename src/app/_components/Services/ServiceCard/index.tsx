'use client';

import { useState, useRef, useEffect, ReactNode, JSX, Dispatch, SetStateAction, RefObject } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type ServiceCard = {
    icon: ReactNode;
    title: string;
    text: string;
};

export default function ServiceCard({ icon, title, text }: ServiceCard): JSX.Element {
    const [ shown, setShown ]: [ number, Dispatch<SetStateAction<number>> ] = useState(0);
    const ref: RefObject<HTMLLIElement | null> = useRef<HTMLLIElement>(null);
    const inView: boolean = useInView(ref, { once: false, margin: '0px 0px 0px 0px' });

    useEffect(() => {
        if (inView) setShown(1);
    }, [ inView ]);

    const variants: Variants = {
        hidden: { y: 40, opacity: 0, scale: 0.95 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    };

    return (
        <motion.li ref={ ref } initial="hidden" animate={ shown ? 'visible' : 'hidden' } variants={ variants } tabIndex={ 0 } role="listitem" className="w-full h-full max-w-96 sm:max-w-none p-8 bg-white border border-[var(--border)] rounded-xl transition hover:border-[var(--primary)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]">
            <article aria-labelledby={ title.replace(/\s+/g, '-').toLowerCase() }>
                <span className="inline-block" aria-hidden="true">{ icon }</span>
                <h3 id={ title.replace(/\s+/g, '-').toLowerCase() } className="mt-6 font-semibold">{ title }</h3>
                <p id={ `${title.replace(/\s+/g, '-').toLowerCase()}-desc` } className="mt-2">{ text }</p>
            </article>
        </motion.li>
    );
}
