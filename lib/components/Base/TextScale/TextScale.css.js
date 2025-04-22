// src/components/Button/Button.css.js
import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
});

export const type = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    '& > *': {
        margin: 0,
        padding: 0,
    },
});
