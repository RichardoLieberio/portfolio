import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useScrollToTopReturn } from './types';

export function useScrollToTop(): useScrollToTopReturn {
    const [ scrollPosition, setScrollPosition ]: [ number, Dispatch<SetStateAction<number>> ] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPosition(window.pageYOffset);
        });
    }, []);

    function scroll(): void {
        window.scrollTo(0, 0);
    }

    return { hidden: scrollPosition < 150, scroll };
}
