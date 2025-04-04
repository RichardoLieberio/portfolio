'use client';

import { useState, useRef, useEffect, JSX, Dispatch, SetStateAction, RefObject } from 'react';
import { motion, animate, useMotionValue, useTransform, useInView, Easing, MotionValue, AnimationPlaybackControls } from 'framer-motion';

type NumberProps = {
    number: number;
    duration: number;
    ease: Easing;
};

export default function Number({ number, duration, ease }: NumberProps): JSX.Element {
    const [ displayNumber, setDisplayNumber ]: [ number, Dispatch<SetStateAction<number>> ] = useState(0);
    const count: MotionValue<number> = useMotionValue(0);
    const rounded: MotionValue<number> = useTransform(count, (latest) => Math.round(latest));

    const ref: RefObject<HTMLSpanElement | null> = useRef<HTMLSpanElement>(null);
    const inView: boolean = useInView(ref, { once: false, margin: '0px 0px 0px 0px' });

    useEffect(() => {
        if (inView) {
            count.set(0);

            const controls: AnimationPlaybackControls = animate(count, number, { duration, ease, type: 'tween' });
            const unsubscribe: VoidFunction = rounded.on('change', (val) => setDisplayNumber(val));

            return (): void => {
                controls.stop();
                unsubscribe();
            };
        }
    }, [ number, duration, ease, count, rounded, inView ]);

    return (
        <motion.span ref={ ref } className="text-4xl md:text-5xl font-semibold" aria-live="polite" aria-label={ `Count: ${displayNumber}` }>
            { displayNumber }+
        </motion.span>
    );
}
