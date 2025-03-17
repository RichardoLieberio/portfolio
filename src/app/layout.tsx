import { ReactNode, JSX } from 'react';
import './globals.css';

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
            <body className="w-full min-w-80 h-dvh relative text-base overflow-hidden">
                <main className="h-full px-4 sm:px-6 overflow-y-auto scroll-smooth scrollbar-none">
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
