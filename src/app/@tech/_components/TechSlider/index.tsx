'use client';

import { useState, useRef, useEffect, JSX, Dispatch, SetStateAction, RefObject } from 'react';
import { motion, useInView } from 'framer-motion';

type TechSliderProps = {
    tool: string;
    skill: number;
};

export default function TechSlider({ tool, skill }: TechSliderProps): JSX.Element {
    const [ width, setWidth ]: [ number, Dispatch<SetStateAction<number>> ] = useState(0);

    const ref: RefObject<HTMLSpanElement | null> = useRef<HTMLSpanElement>(null);
    const spanRef: RefObject<HTMLSpanElement | null> = useRef<HTMLSpanElement>(null);
    const inView: boolean = useInView(ref, { once: false, margin: '0px 0px 0px 0px' });

    useEffect(() => {
        if (spanRef.current) setWidth(spanRef.current.offsetWidth);
    }, []);

    return (
        <span ref={ ref }>
            <div className="relative">
                <span>{ tool }</span>
                <motion.span key={ inView ? 1 : 0 } initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 }} ref={ spanRef } style={{ right: `calc(${100 - skill}% - ${width}px / 2)` }} className="px-2 py-1 absolute text-xs md:text-sm text-[var(--background)] bg-[var(--foreground)] rounded-sm" aria-live="polite" aria-label={ `${tool} skill level ${skill}%` }>
                    { skill }%
                </motion.span>
            </div>
            <div className="w-full bg-gray-100 rounded-lg h-2 mt-2" role="progressbar" aria-valuenow={ skill } aria-valuemin={ 0 } aria-valuemax={ 100 } aria-label={ `${tool} skill level` }>
                <motion.div
                    key={ inView ? 1 : 0 }
                    initial={{ width: 0 }}
                    animate={{ width: `${skill}%` }}
                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                    className="h-2 bg-[var(--primary)] rounded-lg"
                    aria-hidden="true"
                />
            </div>
        </span>
    );
}
