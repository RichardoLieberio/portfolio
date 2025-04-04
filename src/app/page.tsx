import { JSX } from 'react';
import Hero from './_components/Hero';
import Stats from './_components/Stats';
import About from './_components/About';
import Services from './_components/Services';
import Works from './_components/Works';
import Tech from './_components/Tech';
import Hire from './_components/Hire';
import Social from './_components/Social';
import Footer from './_components/Footer';

export default function AppPage(): JSX.Element {
    return (
        <>
            <Hero />
            <Stats />
            <div className="px-6 pt-16 md:px-8 md:pt-24 space-y-24 md:space-y-28 bg-[linear-gradient(150deg,var(--accent),var(--background),var(--accent),var(--background),var(--accent),var(--background),var(--accent))]">
                <About />
                <Services />
                <Works />
                <Tech />
                <Hire />
                <Social />
                <Footer />
            </div>
        </>
    );
}
