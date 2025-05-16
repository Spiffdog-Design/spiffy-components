// src/components/Base/Badge/Badge.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
const themeColor = createVar('theme-color');
const textColor = createVar('theme-color');
const bgColor = createVar('bg-color');
const borderColor = createVar('border-color');
const hoverColor = createVar('hover-color');

export const badge = style({
    vars: {
        [themeColor]: theme.colors.solid.base[11],
        [textColor]: theme.colors.solid.base[1],
        [bgColor]: themeColor,
        [borderColor]: themeColor,
    },

    alignItems: 'center',
    background: bgColor,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: borderColor,
    borderRadius: 9999,
    color: textColor,
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.15rem',
    fontWeight: 600,
    gap: 3,
    height: 23,
    justifyContent: 'center',
    lineHeight: 1.15,
    padding: '0.1rem 0.75rem',
    position: 'relative',
    textTransform: 'uppercase',
    userSelect: 'none',
    width: 'fit-content',

    selectors: {
        '&[data-type="close"]': {
            padding: '0rem 0rem 0rem 0.75rem',
        },
    },
});

export const button = style({
    vars: {
        [hoverColor]: theme.colors.alpha.base[8],
    },
    background: 'transparent',
    border: 'none',
    borderRadius: 999,
    color: textColor,
    padding: '0 0.45rem',
    ':hover': {
        background: hoverColor,
    },
});

export const content = style({
    display: 'block flex',
    gap: 6,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: '50ch',
    width: 'calc(100%)',
});

export const basic = style({
    vars: {
        [bgColor]: 'transparent',
        [borderColor]: 'transparent',
        [textColor]: themeColor,
    },
});

export const outline = style({
    vars: {
        [bgColor]: 'transparent',
        [borderColor]: themeColor,
        [textColor]: themeColor,
    },
});

export const alert = style({
    vars: {
        [themeColor]: theme.colors.solid.alert[9],
    },
});

export const base = style({
    vars: {
        [themeColor]: theme.colors.solid.base[11],
    },
});

export const primary = style({
    vars: {
        [themeColor]: theme.colors.solid.primary[9],
    },
});

export const success = style({
    vars: {
        [themeColor]: theme.colors.solid.success[9],
    },
});

export const warning = style({
    vars: {
        [themeColor]: theme.colors.solid.warning[9],
    },
});
