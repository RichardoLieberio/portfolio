import { JSX } from 'react';
import Title from '@/components/Title';
import ProjectCard from './_components/ProjectCard';

export default function Works(): JSX.Element {
    return (
        <section className="max-w-7xl mx-auto" aria-labelledby="my-works-title" >
            <Title id="my-works-title" text="My Works" />
            <ul className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <ProjectCard
                    src="/R Tracker.png"
                    alt="R Tracker Home Page"
                    project="R Tracker"
                    title="Expense Tracker"
                    description="A modern, interactive expense tracker with dynamic charts, categorization, and a sleek UI for clear financial insights"
                    stack={[
                        { name: 'Mongo', logo: 'https://img.icons8.com/color/48/mongodb.png' },
                        { name: 'Express', logo: 'https://img.icons8.com/ios/50/express-js.png' },
                        { name: 'React', logo: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' },
                        { name: 'Node', logo: 'https://img.icons8.com/fluency/48/node-js.png' },
                    ]}
                    live="https://www.rtracker.xyz"
                    github="https://github.com/RichardoLieberio/R-Tracker"
                />
                <ProjectCard
                    src="/R Short.png"
                    alt="R Short Home Page"
                    project="R Short"
                    title="AI Short Video Generator"
                    description="A minimalist web app for AI generated short videos in various styles, ensuring high quality, engaging content effortlessly"
                    stack={[
                        { name: 'Next', logo: 'https://img.icons8.com/color/48/nextjs.png' },
                        { name: 'Firebase', logo: 'https://img.icons8.com/color/48/firebase.png' },
                        { name: 'Neon', small: true, logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAh1BMVEUaGhoZAAAUDhO6/7TA/7kWAAAAAAAaGhoaGhoaGhpw/dOm5aFGXkWQyY8x5NAg//cJAAY4/+8d4NUTAAgrva05xK5P/+SEtoG1+q8oxbZRooJJxqk/3sROkHMpNStK5Mam76x27L1WdFSC5LA+UDw2oIxslmwYYF0YXlthhGBcgV5K7tCW4KWT7SOEAAAACXRSTlPM////////Dg035ShEAAAA3klEQVQokY3T2xKCIBCAYYFlO2mumTKVlll2fv/nCywTM5x+L79hZBbwRt7EkTfynKZ1wLT+gZy9kybiNrLLwjQ3ZVkS+NQiP4emyJSm96wAn3+QLcJw+SpJllX1gABtXDH5/idjGMDsC9tNupCQejiPXkinQqED+RYEKOxhUqMPQkDZRalRNihg+7UybRBuIIruyqzF49WstnGXbhr0UYEbOc7AHp9BJCI8Qj1ypXh7KnIzrdsf9FbNLKhz2A3qEfRvQpyvdXle2va5Q7HUXxzzyS/82TAOXuqx+zmMnyAKH7OUQiMTAAAAAElFTkSuQmCC' },
                        { name: 'Clerk', small: true, logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAw1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIKCgoBAQEAAAAAAAAiIiJ5eXm8vLzl5eXy8vIjIyOqqqr9/f3////8/Pynp6deXl7x8fHh4eF4eHj+/v5iYmL7+/tgYGC7u7tsbGxGRkb39/ff399AQEAQEBAdHR0/Pz8HBwdra2u0tLRubm69vb1qamoGBgZ6enr29vYPDw9hYWG6urqoqKhJEX0mAAAAGHRSTlMAElyczOz8mloo8v+eCoz4DCbS////NOig1MJnAAABeElEQVR4AYXTg5YDURBF0QobJ7bTGJux/v+rplPR61H28jNuyUkimUpnstlM2rIT8pOTcjlyc47E5QtFYoqFkhjKFRTVWq0OqlKWo0aTrVa70+31up12n61m4zhf+1uDobfnB30d4Ygq6frhhWe4rOouedkqELm69gz+Daqg9ysCYaz/9g5FcbtJDmj1tGN4//D4+NB5uuEgJZJwgUD7n19Qrxy5CbGBvq/9b/yUFAto6/rv8PE5Go0/MKQkDXS8SAc+Jl5kYo5ISwbqXS/yAGNPfXKSkSzU9A6PMPLUiJPs+QEZqB62mHpqbG5xOuQ9zH47ZAqYe5HFEj7Go9F0hsGSJNAaRu9/w29sfWoGnn8HLFHL2FPrHq3LFXDz1Ik+63O9OC2WO3x3Fbi7/f27pYBa+UZgVkZgJK+Rq17+ErmSKEdD298clxgOWhracjz29Of72LfM2McLp16rVUFVHDGUfpZeXuKcnFm8KUd+StjWrvxTSaP8vwAGs0LGjKCBYAAAAABJRU5ErkJggg==' },
                        { name: 'Replicate', logo: 'https://img.icons8.com/ios/50/replicate.png' },
                        { name: 'Google Text To Speech', logo: 'https://img.icons8.com/fluency-systems-regular/48/speech-to-text.png' },
                    ]}

                    live="https://www.rshort.xyz"
                    github="https://github.com/RichardoLieberio/R-Short"
                />
            </ul>
        </section>
    );
}
