import { KeyboardEvent } from 'react';

export type useScrollToTopReturn = {
    hidden: boolean;
    buttonScroll: (e: KeyboardEvent<HTMLSpanElement>) => void;
    scroll: () => void;
};
