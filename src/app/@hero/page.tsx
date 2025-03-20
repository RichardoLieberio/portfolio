import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typed from './_components/Typed';

export default function Hero(): JSX.Element {
    return (
        <section id="hero" aria-labelledby="hero-title">
            <div className="px-6 md:px-8 bg-linear-150 from-[var(--background)] to-[var(--accent)]/75">
                <div className="max-w-7xl mx-auto py-24 flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-2/3 text-center lg:text-start">
                        <p className="text-[var(--primary)] font-semibold">Creating seamless web experience</p>
                        <h1 className="mt-4 text-4xl md:text-5xl font-semibold" id="hero-title">Richardo Lieberio</h1>
                        <Typed text="Full Stack Developer" />
                        <p className="mt-4">Empowering users with high quality, responsive, and performance driven web experiences, built to meet real world needs</p>
                        <div className="mt-10">
                            <Link href="#" className="px-8 py-2 text-[var(--primary)] border border-[var(--primary)] rounded-full transition hover:bg-[var(--primary)] hover:text-[var(--background)] focus-visible:bg-[var(--primary)] focus-visible:text-[var(--background)] focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2">Let&apos;s connect</Link>
                        </div>
                    </div>
                    <div className="max-w-72 md:max-w-96">
                        <Image src="/portrait.webp" alt="Portrait of me" width={ 1280 } height={ 1280 } className="rounded-4xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
