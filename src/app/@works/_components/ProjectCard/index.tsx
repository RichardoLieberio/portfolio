import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from 'react-icons/fa';

type ProjectCardProps = {
    src: string;
    alt: string;
    project: string;
    categories: string[];
    href: string;
    title: string;
    description: string;
};

export default function ProjectCard({ src, alt, project, categories, href, title, description }: ProjectCardProps): JSX.Element {
    return (
        <li tabIndex={ 0 } role="listitem" className="w-full max-w-xl md:max-w-none h-full mx-auto bg-white border border-[var(--border)] rounded-xl overflow-hidden transition hover:border-[var(--primary)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]">
            <div className="relative group">
                <Image src={ src } alt={ alt } width={ 1920 } height={ 1080 } quality={ 40 } className="w-full transition duration-300 group-hover:brightness-50" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <p className="text-2xl md:text-3xl font-semibold text-center text-[var(--background)]">{ project }</p>
                </div>
            </div>
            <div className="p-8 pt-4 border-t border-[var(--border)]">
                <div className="flex flex-wrap items-center gap-x-2 md:gap-x-4 gap-y-2">
                    { categories.map((category, index) => <span key={ `Category ${index} - ${category}` } className="px-6 py-0.5 text-xs md:text-sm text-[var(--background)] bg-[var(--primary)] whitespace-nowrap rounded-full">{ category }</span>) }
                </div>
                <Link href={ href } title={ 'Visit ' + project } target="_blank" rel="noopener noreferrer" className="w-fit mt-6 flex items-center gap-2 font-semibold hover:underline focus-visible:outline-none focus-visible:underline focus-visible:decoration-2 focus-visible:decoration-[var(--primary)]">
                    { title } <FaLink />
                </Link>
                <p className="mt-2">{ description }</p>
            </div>
        </li>
    );
}
