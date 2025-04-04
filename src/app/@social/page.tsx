import { JSX } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Social(): JSX.Element {
    return (
        <section className="max-w-7xl mx-auto pt-4 text-center">
            <p className="text-[var(--primary)] font-semibold" aria-live="polite">Need help?</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold" aria-live="polite">Let&apos;s work together</h2>
            <p className="mt-4" aria-live="polite">Whether it&apos;s a new project or an improvement on an existing one, I&apos;m here to bring your ideas to life. Let&apos;s build something great together!</p>
            <ul className="mt-8 flex justify-center gap-6 md:gap-8" role="list">
                <li role="listitem">
                    <Link href={ process.env.NEXT_PUBLIC_GITHUB_URI! } title="My Github" target="_blank" rel="noopener noreferrer" aria-label="Github profile">
                        <FaGithub className="text-4xl md:text-5xl cursor-pointer transition hover:text-[var(--primary)] hover:scale-110" />
                    </Link>
                </li>
                <li role="listitem">
                    <Link href={ process.env.NEXT_PUBLIC_LINKEDIN_URI! } title="My LinkedIn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                        <FaLinkedin className="text-4xl md:text-5xl cursor-pointer transition hover:text-[var(--primary)] hover:scale-110" />
                    </Link>
                </li>
                <li role="listitem">
                    <Link href={ process.env.NEXT_PUBLIC_WHATSAPP_URI! } title="My WhatsApp" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp contact">
                        <FaWhatsapp className="text-4xl md:text-5xl cursor-pointer transition hover:text-[var(--primary)] hover:scale-110" />
                    </Link>
                </li>
                <li role="listitem">
                    <Link href={ process.env.NEXT_PUBLIC_INSTAGRAM_URI! } title="My Instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
                        <FaInstagram className="text-4xl md:text-5xl cursor-pointer transition hover:text-[var(--primary)] hover:scale-110" />
                    </Link>
                </li>
                <li role="listitem">
                    <Link href={ process.env.NEXT_PUBLIC_FACEBOOK_URI! } title="My Facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile">
                        <FaFacebook className="text-4xl md:text-5xl cursor-pointer transition hover:text-[var(--primary)] hover:scale-110" />
                    </Link>
                </li>
            </ul>
        </section>
    );
}
