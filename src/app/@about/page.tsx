import { JSX } from 'react';
import Title from '@/components/Title';
import Paragraph from './_components/Paragraph';

export default function About(): JSX.Element {
    return (
        <section className="max-w-7xl mx-auto" aria-labelledby="about-me-title">
            <Title id="about-me-title" text="About Me" />
            <article className="mt-12 md:mt-16">
                <section aria-labelledby="who-i-am">
                    <Paragraph id="who-i-am" title="Who I Am" text="I'm a passionate Full Stack Developer who loves learning and coding. With three years of programming experience and a strong focus on web development over the past year, I specialize in building innovative solutions that prioritize user needs, optimal performance, and seamless UX/UI design. Whether crafting scalable applications or refining front end interactions, I strive to deliver high quality, efficient, and user friendly experiences." />
                </section>
                <div className="mt-12 md:mt-16 flex flex-col md:flex-row gap-12 md:gap-16">
                    <section className="flex-1" aria-labelledby="education-title">
                        <Paragraph id="education-title" title="Education" time="2023 - current" heading="Bachelor in Informatics Engineering at Mikroskil University" text="Developed a strong foundation in software development, algorithm, and system design" />
                    </section>
                    <section className="flex-1" aria-labelledby="work-title">
                        <Paragraph id="work-title" title="Work Education" time="2024 - current" heading="IT Programmer at PT Capella Medan" text="Built and maintained internal websites for company use" />
                    </section>
                </div>
            </article>
        </section>
    );
}
