'use client';

import { useState, useEffect, Dispatch, SetStateAction, JSX } from 'react';
import DotsMenu from './_components/DotsMenu';

type menuType = {
    href: string;
    page: string;
    ariaLabel: string;
}

const menu: menuType[] = [
    { href: '#home', page: 'Home', ariaLabel: 'Navigate to home section' },
    { href: '#work', page: 'Work', ariaLabel: 'Navigate to work section' },
    { href: '#experience', page: 'Experience', ariaLabel: 'Navigate to experience section' },
    { href: '#services', page: 'Services', ariaLabel: 'Navigate to services section' },
    { href: '#about', page: 'About', ariaLabel: 'Navigate to about section' },
    { href: '#stats', page: 'Stats', ariaLabel: 'Navigate to statistics section' },
    { href: '#contact', page: 'Contact', ariaLabel: 'Navigate to contact section' },
];

export default function Menu(): JSX.Element {
    const [ activeSection, setIsActiveSection ]: [ string, Dispatch<SetStateAction<string>> ] = useState('');

    useEffect(() => {
        const sections: Element[] = menu.map(({ href }: { href: string }) => document.querySelector(href)!);

        const observer: IntersectionObserver = new IntersectionObserver((entries) => {
            const visibleSection: IntersectionObserverEntry | undefined = entries.find((entry) => entry.isIntersecting);
            if (visibleSection) setIsActiveSection(visibleSection.target.id);
        }, { rootMargin: '-30% 0px -30% 0px', threshold: 0.3 });

        sections.forEach((section) => observer.observe(section));

        return (): void => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <nav className="w-fit h-fit mx-auto sticky bottom-4 sm:bottom-6" aria-label="Main Navigation">
            <ul className="w-fit h-fit flex gap-1" role="list">
                { menu.map(({ href, page, ariaLabel }: menuType) => (
                    <li key={ `Page-${page}` } className="w-4 h-4" role="listitem">
                        <DotsMenu href={ href } page={ page } ariaLabel={ ariaLabel } active={ activeSection === href.substring(1) } />
                    </li>
                )) }
            </ul>
        </nav>
    );
}
