import { JSX } from 'react';
import Statistic from './_components/Statistic';

export default function Stats(): JSX.Element {
    return (
        <section className="px-6 md:px-8" aria-labelledby="stats-title">
            <h2 id="stats-title" className="sr-only">My Statistics</h2>
            <ul className="max-w-7xl mx-auto py-10 lg:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10" role="list">
                <Statistic number={ 1000 } duration={ 4 } ease={[ 0.1, 1, 0.2, 1 ]} label={ 'Hours of work' } />
                <Statistic number={ 10 } duration={ 4 } ease={[ 0.2, 1, 0.4, 1 ]} label={ 'Projects completed' } />
                <Statistic number={ 5 } duration={ 2.8 } ease={[ 0.4, 1, 0.6, 1 ]} label={ 'Happy clients' } />
                <Statistic number={ 15 } duration={ 3.6 } ease={[ 0.25, 1, 0.45, 1 ]} label={ 'Technologies mastered' } />
            </ul>
        </section>
    );
}
