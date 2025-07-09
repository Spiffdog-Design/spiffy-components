// src/components/Button/Button.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
export const themeColor = createVar('theme-color');

export const accordion = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    borderRadius: '0.5rem',
    backgroundColor: theme.colors.solid.base[1],
    padding: theme.spacing.padding[0],
    width: '100%',
});

export const accordionList = style({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.gap[2],
    width: '100%',
});

export const heading = style({
    vars: {
        [themeColor]: theme.colors.solid.base[1],
    },
    display: 'grid',
    gridTemplateColumns: '1fr auto',

    backgroundColor: 'transparent',
    border: 'transparent',
    borderLeft: `3px solid hsl(from ${themeColor} h s l / 0.75)`,
    color: theme.colors.solid.base[12],
    cursor: 'pointer',
    fontSize: theme.font.size[2],
    fontWeight: theme.font.weight.bold,
    lineHeight: theme.font.base.lineHeight,
    padding: `${theme.spacing.padding[1]} ${theme.spacing.padding[3]}`,
    width: '100%',
});

export const headingContainer = style({
    alignSelf: 'center',
    justifySelf: 'start',
});

export const iconContainer = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
});

export const headingIconOpen = style({
    '--fa-display': 'none',
    selectors: {
        [`${heading}[aria-expanded="true"] &`]: {
            '--fa-display': 'inline-block',
        },
    },
});

export const headingIconClosed = style({
    '--fa-display': 'none',
    selectors: {
        [`${heading}[aria-expanded="false"] &`]: {
            '--fa-display': 'inline-block',
        },
    },
});

export const content = style({
    vars: {
        [themeColor]: theme.colors.solid.base[11],
    },
    backgroundColor: theme.colors.solid.base[1],
    color: theme.colors.solid.base[11],
    fontSize: theme.font.size[2],
    padding: `${theme.spacing.padding[0]} ${theme.spacing.padding[3]}`,
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
