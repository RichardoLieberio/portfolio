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
};

export default function AppLayout({ hero }: AppLayoutProps): JSX.Element {
    return (
        <html lang="en">
            <body className={`${poppins.className} w-full min-w-80 relative text-sm sm:text-base tracking-tight`}>
                { hero }
            </body>
        </html>
    );
}
