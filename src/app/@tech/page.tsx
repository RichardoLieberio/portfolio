import { JSX } from 'react';
import Title from '@/components/Title';
import TechCard from './_components/TechCard';

export default function Tech(): JSX.Element {
    return (
        <section className="max-w-7xl mx-auto" aria-labelledby="tech-stack-title">
            <Title id="tech-stack-title" text="Tech Stack" />
            <ul className="mt-12 md:mt-16 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <TechCard category="Languages" skills={[ { tool: 'Javascript', skill: 90 }, { tool: 'Typescript', skill: 85 }, { tool: 'PHP', skill: 85 } ]} />
                <TechCard category="Frameworks & Libraries" skills={[ { tool: 'NextJS', skill: 80 }, { tool: 'Laravel', skill: 75 }, { tool: 'ReactJS', skill: 85 }, { tool: 'Express', skill: 90 } ]} />
                <TechCard category="Development Tools" skills={[ { tool: 'NodeJS', skill: 95 }, { tool: 'Composer', skill: 90 }, { tool: 'Github', skill: 90 }, { tool: 'AWS', skill: 80 } ]} />
            </ul>
        </section>
    );
}
