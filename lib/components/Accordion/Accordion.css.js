// src/components/Button/Button.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
export const base11 = createVar('--base-11');

export const content = style({
    vars: {
        [base11]: theme.colors.solid.base[11],
    },
    padding: '12px 16px',
    backgroundColor: theme.colors.solid.base[4],
    border: `2px solid ${base11}`,
    color: theme.colors.solid.base[12],
});
export const header = style({
    vars: {
        [base11]: theme.colors.solid.base[11],
    },
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.solid.base[3],
    borderLeft: `2px solid ${base11}`,
    color: base11,
    margin: 0,
    padding: 0,
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
    vars: {
        [base11]: theme.colors.solid.base[11],
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: base11,
    border: 'none',
    color: theme.colors.solid.base[1],
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '1.2rem',
    margin: 0,
    padding: '12px 16px',
    textTransform: 'uppercase',
    height: '100%',
    width: '100%',

    "& svg.open, &[data-state='open'] svg.close": {
        display: 'inline',
    },
    "&[data-state='open'] svg.open, & svg.close": {
        display: 'none',
    },
});

export const alert = style({
    vars: {
        [base11]: theme.colors.solid.alert[11],
    },
});
export const primary = style({
    vars: {
        [base11]: theme.colors.solid.primary[11],
    },
});
export const success = style({
    vars: {
        [base11]: theme.colors.solid.success[11],
    },
});
export const warning = style({
    vars: {
        [base11]: theme.colors.solid.warning[11],
    },
});
