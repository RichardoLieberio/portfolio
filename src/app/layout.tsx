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
    menu: ReactNode;
    home: ReactNode;
    work: ReactNode;
    experience: ReactNode;
    services: ReactNode;
    about: ReactNode;
    stats: ReactNode;
    contact: ReactNode;
};

export default function AppLayout({ menu, home, work, experience, services, about, stats, contact }: AppLayoutProps): JSX.Element {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${poppins.className} w-full min-w-80 h-dvh relative text-sm sm:text-base tracking-tight overflow-hidden`}>
                <main className="max-w-7xl h-full mx-auto px-4 sm:px-6 relative overflow-y-auto scroll-smooth scrollbar-none">
                    { home }
                    { work }
                    { experience }
                    { services }
                    { about }
                    { stats }
                    { contact }
                </main>
                { menu }
            </body>
        </html>
    );
}
