import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Poppins } from 'next/font/google';
import { Person, WithContext } from 'schema-dts';
import { ReactNode, JSX } from 'react';
import { ToastContainer, Bounce } from 'react-toastify';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

const poppins: NextFont = Poppins({
    weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ],
    style: [ 'normal', 'italic' ],
    subsets: [ 'latin' ],
});

export const metadata: Metadata = {
    title: 'Richardo Lieberio - Fullstack Web Developer',
    description: "I'm Richardo Lieberio, a web developer specializing in Next.js, Laravel, and modern web technologies. Let's build something awesome together!",
    keywords: [ 'Richardo Lieberio', 'Richardo Lieberio Web Developer', 'Richardo Lieberio Developer', 'Richardo Lieberio Full Stack Developer', 'Web Developer in Medan', 'Full Stack Developer in Medan', 'Freelance Web Developer Medan', 'Medan Web Developer', 'Medan Website Developer', 'Richardo Lieberio – Web Developer in Medan', 'Richardo Lieberio – Full Stack Developer in Medan', 'Richardo Lieberio – Freelance Web Developer Medan', 'Web Developer Medan – Richardo Lieberio', 'Medan Programmer', 'Website Developer in Medan' ],
    authors: [ { name: 'Richardo Lieberio', url: process.env.NEXT_PUBLIC_APP_URI } ],
    creator: 'Richardo Lieberio',
    publisher: 'Richardo Lieberio',
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
    alternates: { canonical: process.env.NEXT_PUBLIC_APP_URI },
    openGraph: {
        type: 'website',
        url: process.env.NEXT_PUBLIC_APP_URI,
        title: 'Richardo Lieberio - Fullstack Web Developer',
        description: "I'm Richardo Lieberio, a web developer specializing in Next.js, Laravel, and modern web technologies. Let's build something awesome together!",
        siteName: 'Richardo Lieberio',
        images: [ { url: `${process.env.NEXT_PUBLIC_APP_URI}/Graph.png`, alt: 'Open Graph Thumbnail' } ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Richardo Lieberio - Fullstack Web Developer',
        description: "I'm Richardo Lieberio, a web developer specializing in Next.js, Laravel, and modern web technologies.",
        images: [ `${process.env.NEXT_PUBLIC_APP_URI}/Graph.png` ],
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
    category: 'fullstack web developer',
};

export default function AppLayout({ children }: { children: ReactNode }): JSX.Element {
    const jsonLd: WithContext<Person> = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Richardo Lieberio',
        alternateName: 'Richardo Lieberio - Fullstack Web Developer',
        url: process.env.NEXT_PUBLIC_APP_URI,
        image: `${process.env.NEXT_PUBLIC_APP_URI}/Picture.jpeg`,
        jobTitle: 'Full Stack Web Developer',
        worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
        },
        description: "I'm Richardo Lieberio, a web developer specializing in Next.js, Laravel, and modern web technologies. Let's build something awesome together!",
        sameAs: [
            process.env.NEXT_PUBLIC_GITHUB_URI!,
            process.env.NEXT_PUBLIC_LINKEDIN_URI!,
            process.env.NEXT_PUBLIC_WHATSAPP_URI!,
            process.env.NEXT_PUBLIC_INSTAGRAM_URI!,
            process.env.NEXT_PUBLIC_FACEBOOK_URI!,
        ],
    };

    return (
        <html lang="en" className="scroll-smooth">
            <GoogleAnalytics gaId="G-V5SB3XV7CF" />
            <head>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </head>
            <body className={`${poppins.className} w-full min-w-80 relative text-sm md:text-base`}>
                { children }
                <ScrollToTop />
                <ToastContainer
                    position="top-center"
                    autoClose={ 3000 }
                    hideProgressBar={ false }
                    newestOnTop={ false }
                    closeOnClick={ false }
                    rtl={ false }
                    pauseOnFocusLoss={ false }
                    draggable
                    pauseOnHover={ false }
                    theme="colored"
                    transition={ Bounce }
                />
            </body>
        </html>
    );
}
