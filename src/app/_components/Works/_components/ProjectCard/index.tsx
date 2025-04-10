'use client';

import { useState, useRef, useEffect, JSX, Dispatch, SetStateAction, RefObject } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
    src: string;
    alt: string;
    project: string;
    title: string;
    description: string;
    stack: { logo: string, name: string, small?: boolean }[]
    live: string;
    github: string;
};

export default function ProjectCard({ src, alt, project, title, description, stack, live, github }: ProjectCardProps): JSX.Element {
    const [ shown, setShown ]: [ number, Dispatch<SetStateAction<number>> ] = useState(0);
    const ref: RefObject<HTMLLIElement | null> = useRef<HTMLLIElement>(null);
    const inView: boolean = useInView(ref, { once: false, margin: '0px 0px 0px 0px' });

    useEffect(() => {
        if (inView) setShown(1);
    }, [ inView ]);

    const variants: Variants = {
        hidden: { y: 40, opacity: 0, scale: 0.95 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    };

    return (
        <motion.li ref={ ref } initial="hidden" animate={ shown ? 'visible' : 'hidden' } variants={ variants } tabIndex={ 0 } role="listitem" className="w-full max-w-xl md:max-w-none h-full mx-auto relative bg-white border border-[var(--border)] rounded-xl overflow-hidden transition hover:border-[var(--primary)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]" aria-labelledby={`project-card-${title}`}>
            <div className="relative group">
                <Image src={ src } alt={ alt } width={ 1920 } height={ 1080 } quality={ 40 } loading="lazy" className="w-full transition duration-300 group-hover:brightness-50" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <p className="text-2xl md:text-3xl font-semibold text-center text-[var(--background)]">{ project }</p>
                </div>
            </div>
            <div className="px-8 pt-6 pb-18 md:pb-20 border-t border-[var(--border)]">
                <p id={`project-card-${title}`} className="w-fit flex items-center gap-2 font-semibold">{ title }</p>
                <p className="mt-2">{ description }</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-4">
                    { stack.map(({ name, logo, small }: { name: string, logo: string, small?: boolean }, index) => (
                        <div key={`Stack ${index} - ${name}`} className={ `${small ? 'px-3.5' : 'px-3'} py-1 flex items-center gap-2 bg-gray-100 rounded-lg` } aria-label={`Technology stack: ${name}`}>
                            <Image src={ logo } alt={ name } width={ small ? 16 : 20 } height={ small ? 16 : 20 } loading="lazy" className={ small ? 'w-4 h-4' : 'w-5 h-5' } />
                            <span className="text-xs md:text-sm font-medium text-gray-700">{ name }</span>
                        </div>
                    )) }
                </div>
                <div className="absolute right-8 bottom-6 flex items-center justify-end gap-4">
                    <Link href={ live } title={ 'Visit ' + project } target="_blank" rel="noopener noreferrer" className="w-fit flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline focus-visible:outline-none focus-visible:underline focus-visible:decoration-2 focus-visible:decoration-[var(--primary)]" aria-label={`Visit ${project} website`}>
                        Visit site
                    </Link>
                    <Link href={ github } title={ 'Visit ' + project + "'s Github" } target="_blank" rel="noopener noreferrer" className="w-fit flex items-center gap-2 font-semibold hover:underline focus-visible:outline-none focus-visible:underline focus-visible:decoration-2 focus-visible:decoration-[var(--primary)]" aria-label={`Visit ${project} GitHub repository`}>
                        Github
                    </Link>
                </div>
            </div>
        </motion.li>
    );
}
