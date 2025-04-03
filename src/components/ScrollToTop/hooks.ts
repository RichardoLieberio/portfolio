import { useState, useEffect, Dispatch, SetStateAction, KeyboardEvent } from 'react';
import { useScrollToTopReturn } from './types';

export function useScrollToTop(): useScrollToTopReturn {
    const [ scrollPosition, setScrollPosition ]: [ number, Dispatch<SetStateAction<number>> ] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPosition(window.pageYOffset);
        });
    }, []);

    function buttonScroll(e: KeyboardEvent<HTMLSpanElement>): void {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scroll();
        }
    }

    function scroll(): void {
        window.scrollTo(0, 0);
    }

    return { hidden: scrollPosition < 150, buttonScroll, scroll };
}
