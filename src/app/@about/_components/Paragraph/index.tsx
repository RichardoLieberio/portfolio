'use client';

import { useRef, JSX, RefObject } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type ParagraphProps = {
    id: string;
    title: string;
    time?: string;
    heading?: string;
    text: string;
};

export default function Paragraph({ id, title, time, heading, text }: ParagraphProps): JSX.Element {
    const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const inView: boolean = useInView(ref, { once: false, margin: '0px 0px 0px 0px' });

    const variants: Variants = {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    };

    return (
        <motion.div ref={ ref } initial="hidden" animate={ inView ? 'visible' : 'hidden' } variants={ variants }>
            <h3 id={ id } className="text-lg md:text-xl font-semibold">{ title }</h3>
            <div className="mt-2 md:mt-4 pl-4 border-l-4 border-[var(--primary)]">
                { time && <p className="text-[var(--primary)] font-semibold" aria-label={ `Time period: ${time}` }>{ time }</p> }
                { heading && <p className="mt-2 font-semibold">{ heading }</p> }
                <p>{ text }</p>
            </div>
        </motion.div>
    );
}
