import { JSX } from 'react';

type TitleProps = {
    id: string;
    text: string;
}

export default function Title({ id, text }: TitleProps): JSX.Element {
    return (
        <header id={ id }>
            <h2 className="w-fit mx-auto text-2xl md:text-3xl font-semibold">{ text }</h2>
            <div className="w-20 h-1 mx-auto mt-2 md:mt-4 bg-[var(--primary)]"></div>
        </header>
    );
}
