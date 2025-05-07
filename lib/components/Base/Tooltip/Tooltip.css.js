// src/components/Button/Tooltip.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

const solid10 = createVar('solid-10');

export const content = style({
    vars: {
        [solid10]: theme.colors.solid.base[10],
    },
    backgroundColor: theme.colors.solid.base[1],
    border: `3px solid ${solid10}`,
    borderRadius: 8,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    fontSize: '1.4rem',
    lineHeight: '1.25rem',
    userSelect: 'none',
    minWidth: 200,
    maxWidth: '33vw',
    whiteSpace: 'pre-line',
    zIndex: 1000,
});
export const arrow = style({
    fill: solid10,
});

export const padded = style({
    padding: '12px 20px',
});

export const trigger = style({
    cursor: 'help',
    userSelect: 'none',
});

export const alert = style({
    vars: {
        [solid10]: theme.colors.solid.alert[10],
    },
});
export const primary = style({
    vars: {
        [solid10]: theme.colors.solid.primary[10],
    },
});
export const success = style({
    vars: {
        [solid10]: theme.colors.solid.success[10],
    },
});
export const warning = style({
    vars: {
        [solid10]: theme.colors.solid.warning[10],
    },
});
