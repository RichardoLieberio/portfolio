import { JSX } from 'react';
import { Easing } from 'framer-motion';
import Number from '../Number';

type StatisticProps = {
    number: number;
    duration: number;
    ease: Easing;
    label: string;
};

export default function Statistic({ number, duration, ease, label }: StatisticProps): JSX.Element {
    return (
        <li className="md:flex-1 flex flex-col items-center justify-center" role="listitem">
            <Number number={ number } duration={ duration } ease={ ease } />
            <span className="mt-1 md:mt-2 text-center text-[var(--foreground)]/60">{ label }</span>
        </li>
    );
}
