// src/components/Button/Button.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
export const base = createVar('base-color');
export const hover = createVar('hover-color');

export const content = style({
    vars: {
        [base]: theme.colors.solid.base[11],
    },
    padding: '12px 16px',
    backgroundColor: theme.colors.solid.base[4],
    border: `2px solid ${base}`,
    color: theme.colors.solid.base[12],
});
export const header = style({
    vars: {
        [base]: theme.colors.solid.base[11],
    },
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: base,
    borderLeftColor: base,
    borderLeftStyle: 'solid',
    borderLeftWidth: 2,
    color: theme.colors.solid.base[1],
    margin: 0,
    padding: 0,

    '&:hover:not([data-state="open"])': {
        backgroundColor: `hsl(from ${base} h s calc(l + 10))`,
        borderColor: `hsl(from ${base} h s calc(l + 10))`,
    },
});
export const item = style({
    overflow: 'hidden',
});
export const root = style({
    '& > * + *': {
        borderTopWidth: '4px',
        borderTopStyle: 'solid',
        borderTopColor: theme.colors.solid.base[1],
    },
});
export const trigger = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'transparent',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '1.4rem',
    margin: 0,
    padding: '8px 12px',
    textTransform: 'uppercase',
    height: '100%',
    width: '100%',

    '& .open': {
        display: 'inline',
    },
    "&[data-state='open'] .open": {
        display: 'none',
    },

    '& .closed': {
        display: 'none',
    },
    "&[data-state='open'] .closed": {
        display: 'inline',
    },
});

export const alert = style({
    vars: {
        [base]: theme.colors.solid.alert[11],
    },
});
export const primary = style({
    vars: {
        [base]: theme.colors.solid.primary[11],
    },
});
export const success = style({
    vars: {
        [base]: theme.colors.solid.success[11],
    },
});
export const warning = style({
    vars: {
        [base]: theme.colors.solid.warning[11],
    },
});
