import { NextFont } from 'next/dist/compiled/@next/font';
import { Poppins } from 'next/font/google';
import { ReactNode, JSX } from 'react';
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
};

export default function AppLayout({ hero, stats, about, services, works }: AppLayoutProps): JSX.Element {
    return (
        <html lang="en">
            <body className={`${poppins.className} w-full min-w-80 relative text-sm md:text-base tracking-tight`}>
                { hero }
                { stats }
                <div className="px-6 py-16 md:px-8 md:py-24 space-y-24 md:space-y-28 bg-[linear-gradient(150deg,var(--accent),var(--background),var(--accent))]">
                    { about }
                    { services }
                </div>
                { works }
            </body>
        </html>
    );
}
