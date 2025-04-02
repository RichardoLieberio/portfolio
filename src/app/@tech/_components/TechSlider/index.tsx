'use client';

import { useState, useRef, useEffect, JSX, Dispatch, SetStateAction, RefObject } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type TechSliderProps = {
    tool: string;
    skill: number;
};

export default function TechSlider({ tool, skill }: TechSliderProps): JSX.Element {
    const [ width, setWidth ]: [ number, Dispatch<SetStateAction<number>> ] = useState(0);

    const divRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const spanRef: RefObject<HTMLSpanElement | null> = useRef<HTMLSpanElement>(null);
    const inView: boolean = useInView(divRef, { once: false, margin: '0px 0px 0px 0px' });

    useEffect(() => {
        if (spanRef.current) setWidth(spanRef.current.offsetWidth);
    }, []);

    const labelVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, delay: 0.5, ease: 'easeOut' } },
    };

    const slideVariants: Variants = {
        hidden: { width: 0 },
        visible: { width: `${skill}%`, transition: { type: 'spring', stiffness: 200, damping: 30, ease: 'easeOut' } },
    };

    return (
        <div ref={ divRef }>
            <div className="relative">
                <span>{ tool }</span>
                <motion.span ref={ spanRef } initial="hidden" animate={ inView ? 'visible' : 'hidden' } variants={ labelVariants } style={{ right: `calc(${100 - skill}% - ${width}px / 2)` }} className="px-2 py-1 absolute text-xs md:text-sm text-[var(--background)] bg-[var(--foreground)] rounded-sm" aria-live="polite" aria-label={ `${tool} skill level ${skill}%` }>
                    { skill }%
                </motion.span>
            </div>
            <div className="w-full bg-gray-100 rounded-lg h-2 mt-2" role="progressbar" aria-valuenow={ skill } aria-valuemin={ 0 } aria-valuemax={ 100 } aria-label={ `${tool} skill level` }>
                <motion.div initial="hidden" animate={ inView ? 'visible' : 'hidden' } variants={ slideVariants } className="h-2 bg-[var(--primary)] rounded-lg" aria-hidden="true" />
            </div>
        </div>
    );
}
