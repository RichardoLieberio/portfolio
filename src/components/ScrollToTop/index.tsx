'use client';

import { JSX } from 'react';
import { useScrollToTop } from './hooks';
import { useScrollToTopReturn } from './types';

export default function ScrollToTop(): JSX.Element {
    const { hidden, buttonScroll, scroll }: useScrollToTopReturn = useScrollToTop();

    return (
        <div className={ `${hidden ? 'opacity-0' : 'opacity-100'} fixed left-8 bottom-20 -translate-x-1/2 translate-y-1/2 hidden md:flex items-center gap-2 -rotate-90 transition` }>
            <div className="w-28 h-px bg-[var(--primary)]"></div>
            <span role="button" tabIndex={ 0 } onKeyDown={ buttonScroll } onClick={ scroll } className="text-xs md:text-sm text-[var(--primary)] uppercase whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2" aria-label="Scroll to top">Scroll To Top</span>
        </div>
    );
}
