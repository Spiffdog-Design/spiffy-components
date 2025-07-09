import { style, createVar, globalStyle } from '@vanilla-extract/css';
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
    outline: 'none',
    padding: theme.spacing.padding[0],
    minWidth: 200,
    maxWidth: '33vw',
    zIndex: 1000,

    selectors: {
        '&:focus-visible': {
            outline: 'none',
        },
    },
});

export const padded = style({
    padding: theme.spacing.padding[2],
});

export const header = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: `hsl(from ${solid10} h s l / 15%)`,
    padding: theme.spacing.padding[1],
    width: '100%',
});

export const arrow = style({});

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

globalStyle(`${arrow} svg`, {
    stroke: solid10,
    fill: solid10,
});

globalStyle(`div[data-dialog]:has(${content})`, {
    outline: 'none',
});
