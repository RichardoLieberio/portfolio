import { JSX } from 'react';

type DotsMenu = {
    href: string;
    page: string;
    ariaLabel: string;
    active: boolean;
}

export default function DotsMenu({ href, page, ariaLabel, active }: DotsMenu): JSX.Element {
    return (
        <a href={ href } title={ page } aria-label={ ariaLabel } className="w-3 h-3 relative inline-block rounded-full focus:outline-2 focus:outline-[var(--primary)]">
            <div className={`${active ? 'w-3 h-3 bg-[var(--secondary)]' : 'w-1 h-1 bg-[var(--accent)]'} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition`}></div>
        </a>
    );
}
