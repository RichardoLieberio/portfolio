import { ReactNode, JSX } from 'react';
import './globals.css';

type AppLayoutProps = {
    children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps): JSX.Element {
    return (
        <html lang="en">
            <body className="w-full min-w-80 px-4 sm:px-6 relative text-base overflow-x-hidden scrollbar-none">
                { children }
            </body>
        </html>
    );
}
