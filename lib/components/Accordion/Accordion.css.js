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
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: base11,
    border: 'none',
    color: theme.colors.solid.base[1],
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
