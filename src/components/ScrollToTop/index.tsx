'use client';

import { JSX } from 'react';
import { useScrollToTop } from './hooks';
import { useScrollToTopReturn } from './types';

export default function ScrollToTop(): JSX.Element {
    const { hidden, scroll }: useScrollToTopReturn = useScrollToTop();

    return (
        <div className={ `${hidden ? 'opacity-0' : 'opacity-100'} fixed left-8 bottom-20 -translate-x-1/2 translate-y-1/2 hidden md:flex items-center gap-2 -rotate-90 transition` }>
            <div className="w-28 h-px bg-[var(--primary)]"></div>
            <span onClick={ scroll } className="text-xs md:text-sm text-[var(--primary)] uppercase whitespace-nowrap cursor-pointer">Scroll To Top</span>
        </div>
    );
}
