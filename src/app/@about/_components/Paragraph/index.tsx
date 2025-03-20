import { JSX } from 'react';

type ParagraphProps = {
    time?: string;
    title?: string;
    text: string;
};

export default function Paragraph({ time, title, text }: ParagraphProps): JSX.Element {
    return (
        <div className="mt-2 md:mt-4 pl-4 border-l-4 border-[var(--primary)]">
            { time && <p className="text-[var(--primary)] font-semibold" aria-label={ `Time period: ${time}` }>{ time }</p> }
            { title && <p className="mt-2 font-semibold">{ title }</p> }
            <p>{ text }</p>
        </div>
    );
}
