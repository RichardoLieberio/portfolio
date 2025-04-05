'use client';

import { useState, useRef, useEffect, JSX, Dispatch, SetStateAction, RefObject } from 'react';
import { useInView } from 'framer-motion';
import { ReactTyped } from 'react-typed';

export default function Typed({ text }: { text: string }): JSX.Element {
    const [ key, setKey ]: [ number, Dispatch<SetStateAction<number>> ] = useState(0);
    const ref: RefObject<HTMLSpanElement | null> = useRef<HTMLSpanElement>(null);
    const inView: boolean = useInView(ref, { once: false, margin: '0px 0px 0px 0px' });

    useEffect(() => {
        if (inView) setKey((prev) => prev + 1);
    }, [ inView ]);

    return (
        <span ref={ ref } aria-hidden>
            <ReactTyped key={ key } strings={[ text ]} typeSpeed={ 60 } startWhenVisible className="mt-1 text-4xl md:text-5xl text-[var(--primary)] font-semibold" />
        </span>
    );
}
