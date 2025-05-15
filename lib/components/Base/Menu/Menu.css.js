// src/components/Label/Label.css.js
import { style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

export const arrow = style({
    fill: theme.colors.solid.base[10],
});

export const content = style({
    minWidth: 220,
    backgroundColor: theme.colors.solid.base[2],
    border: `2px solid ${theme.colors.solid.base[10]}`,
    borderRadius: 4,
    boxShadow: '#0e121659 0px 10px 38px -10px, #0e121633 0px 10px 20px -15px',
    overflow: 'hidden',
});

export const indicator = style({
    position: 'absolute',
    left: 0,
    width: 40,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.solid.success[9],
});

export const item = style({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.colors.solid.base[2],
    color: theme.colors.solid.base[12],
    cursor: 'pointer',
    outline: 'none',
    padding: 6,
    paddingLeft: 40,
    position: 'relative',
    userSelect: 'none',
    '&[data-disabled]': {
        color: theme.colors.solid.base[9],
        pointerEvents: 'none',
    },
    '&[data-highlighted]': {
        backgroundColor: theme.colors.solid.base[3],
    },
});

export const subMenu = style({
    fontWeight: 700,
    paddingLeft: 8,
});

export const title = style({
    display: 'flex',
    justifyContent: 'center',

    backgroundColor: theme.colors.alpha.base[4],
    borderBottom: `1px solid ${theme.colors.alpha.base[6]}`,
    padding: '0.6rem 0.8rem',
    textTransform: 'uppercase',
    fontWeight: 700,
});
