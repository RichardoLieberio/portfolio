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

type AppLayoutProps = {
    hero: ReactNode;
    stats: ReactNode;
    about: ReactNode;
    services: ReactNode;
    works: ReactNode;
    tech: ReactNode;
    hire: ReactNode;
    social: ReactNode;
    footer: ReactNode;
};

export default function AppLayout({ hero, stats, about, services, works, tech, hire, social, footer }: AppLayoutProps): JSX.Element {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${poppins.className} w-full min-w-80 relative text-sm md:text-base`}>
                { hero }
                { stats }
                <div className="px-6 pt-16 md:px-8 md:pt-24 space-y-24 md:space-y-28 bg-[linear-gradient(150deg,var(--accent),var(--background),var(--accent),var(--background),var(--accent),var(--background),var(--accent))]">
                    { about }
                    { services }
                    { works }
                    { tech }
                    { hire }
                    { social }
                    { footer }
                </div>
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
