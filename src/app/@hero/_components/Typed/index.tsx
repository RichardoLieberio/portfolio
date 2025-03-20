'use client';

import { JSX } from 'react';
import { ReactTyped } from 'react-typed';

export default function Typed({ strings }: { strings: string[] }): JSX.Element {
    return (
        <ReactTyped strings={ strings } typeSpeed={ 40 } backSpeed={ 30 } loop startWhenVisible className="mt-1 text-4xl md:text-5xl text-[var(--primary)] font-semibold" />
    );
}
