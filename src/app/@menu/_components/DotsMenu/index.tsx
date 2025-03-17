import { JSX } from 'react';

type DotsMenu = {
    href: string;
    page: string;
    ariaLabel: string;
    active: boolean;
}

export default function DotsMenu({ href, page, ariaLabel, active }: DotsMenu): JSX.Element {
    return (
        <a href={ href } title={ page } aria-label={ ariaLabel } className="w-4 h-4 relative inline-block rounded-full border border-[var(--accent)]">
            { active && <div className="w-3 h-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--primary)] rounded-full"></div> }
        </a>
    );
}
