// src/components/Button/Button.css.js
import { createVar, style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

const themeColor = createVar('theme-color');

export const actions = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: theme.spacing.gap[2],
});

export const backdrop = style({
    vars: {
        [themeColor]: theme.colors.solid.base[12],
    },

    backgroundColor: `hsl(from ${themeColor} h s l / 0.1)`,
    webkitBackdropFilter: 'blur(4px)',
    opacity: 0,
    transitionProperty: 'opacity, backdrop-filter',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
    backdropFilter: 'blur(0)',

    selectors: {
        '&[data-enter]': {
            opacity: 1,
            backdropFilter: 'blur(4px)',
        },
    },
});

export const body = style({
    fontSize: theme.font.size[2],
    padding: `${theme.spacing.padding[0]} ${theme.spacing.padding[3]}`,
});

export const description = style({
    fontSize: theme.font.size[1],
    color: theme.colors.solid.base[10],
});

export const dialog = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 24,

    padding: `${theme.spacing.padding[2]} ${theme.spacing.padding[2]}`,
    position: 'fixed',
    inset: '0.75rem',
    zIndex: 50,

    backgroundColor: theme.colors.solid.base[1],
    boxShadow: `0 25px 50px -12px hsl(from ${themeColor} h s l / 0.25)`,
    color: theme.colors.solid.base[12],
    height: 'fit-content',
    margin: 'auto',
    maxHeight: 'calc(100dvh - 0.75rem * 2)',
    maxWidth: 'calc(100dvw - 0.75rem * 2)',
    opacity: 0,
    overflow: 'auto',
    width: 'fit-content',

    transformOrigin: 'center',
    transform: 'scale(0.95)',
    transitionProperty: 'opacity, transform',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',

    selectors: {
        '&[data-enter]': {
            opacity: 1,
            transform: 'scale(1)',
        },
    },
});

export const heading = style({
    color: themeColor,
    fontSize: theme.font.size[2],
    fontWeight: theme.font.weight.semibold,
    textTransform: 'uppercase',
});

export const headingContainer = style({
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.spacing.padding[2]} ${theme.spacing.padding[3]} ${theme.spacing.padding[0]} ${theme.spacing.padding[3]}`,
});

export const alert = style({
    vars: {
        [themeColor]: theme.colors.solid.alert[10],
    },
});
export const primary = style({
    vars: {
        [themeColor]: theme.colors.solid.primary[10],
    },
});
export const success = style({
    vars: {
        [themeColor]: theme.colors.solid.success[10],
    },
});
export const warning = style({
    vars: {
        [themeColor]: theme.colors.solid.warning[10],
    },
});
