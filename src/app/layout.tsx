import type { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Poppins } from 'next/font/google';
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
    title: 'Richardo | Web Developer',
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
        title: 'Richardo | Web Developer',
        description: "I'm Richardo Lieberio, a web developer specializing in Next.js, Laravel, and modern web technologies. Let's build something awesome together!",
        siteName: 'Richardo Portfolio',
        images: [ { url: `${process.env.NEXT_PUBLIC_APP_URI}/Graph.png`, alt: 'Richardo Portfolio Thumbnail' } ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Richardo | Web Developer',
        description: "I'm Richardo Lieberio, a web developer specializing in Next.js, Laravel, and modern web technologies.",
        images: [ `${process.env.NEXT_PUBLIC_APP_URI}/Graph.png` ],
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/Icon.png',
    },
    category: 'technology',
};

export default function AppLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <html lang="en" className="scroll-smooth">
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
