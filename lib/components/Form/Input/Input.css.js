// src/components/Button/Button.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
const bgColor = createVar('--background-color');

export const horizontal = style({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
    columnGap: 20,
    rowGap: 8,

    '& > .helperText': {
        gridColumn: 2,
    },
});

export const vertical = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
});
