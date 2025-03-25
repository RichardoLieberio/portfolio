import { JSX } from 'react';
import Title from '@/components/Title';
import ProjectCard from './_components/ProjectCard';

export default function Works(): JSX.Element {
    return (
        <section id="works">
            <div className="px-6 md:px-8 py-16 md:py-24 bg-linear-180 from-[var(--primary)]/10 to-[var(--background)]">
                <div className="max-w-7xl mx-auto">
                    <Title id="my-works-title" text="My Works" />
                    <ul className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProjectCard
                            src="/R Tracker.png"
                            alt="R Tracker Home Page"
                            project="R Tracker"
                            categories={[ 'Fullstack' ]}
                            href="https://www.rtracker.xyz"
                            title="Expense Tracker"
                            description="A modern and interactive web app for tracking expenses effortlessly. It features dynamic charts, categorization, and a sleek, responsive UI. Built for performance and usability, it helps users gain clear financial insights with ease."
                        />
                        <ProjectCard
                            src="/R Short.png"
                            alt="R Short Home Page"
                            project="R Short"
                            categories={[ 'Fullstack', 'Artificial Intelligence' ]}
                            href="https://www.rshort.xyz"
                            title="AI Short Video Generator"
                            description="A modern, minimalist web app that creates AI generated short videos based on user prompts. Supports various styles, ensuring high-quality, engaging content with ease. Built for creativity and a seamless user experience."
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
}
