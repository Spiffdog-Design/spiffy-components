// src/components/Button/Tooltip.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

const solid10 = createVar('solid-10');

export const children = style({
    padding: 0,
});

export const padded = style({
    padding: '8px 16px 16px 16px',
});

export const close = style({
    vars: {
        [solid10]: theme.colors.solid.base[10],
    },
    color: solid10,
    padding: '6px 8px',
    backgroundColor: 'transparent',
    borderRadius: 4,
    ':hover': {
        backgroundColor: `hsl(from ${solid10} h s l / 15%)`,
    },
});

export const content = style({
    vars: {
        [solid10]: theme.colors.solid.base[10],
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.solid.base[1],
    border: `3px solid ${solid10}`,
    borderRadius: 8,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    lineHeight: '1.25rem',
    position: 'relative',
    userSelect: 'none',
    height: 'fit-content',
    minHeight: 100,
    minWidth: 200,
    maxWidth: '33vw',
    whiteSpace: 'pre-line',
    zIndex: 1000,
});
export const header = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: `hsl(from ${solid10} h s l / 15%)`,
    padding: 4,
    width: '100%',
});
export const arrow = style({
    fill: solid10,
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
