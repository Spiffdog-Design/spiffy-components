// src/components/Base/Badge/Badge.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
const themeColor = createVar('theme-color');
const textColor = createVar('text-color');
const bgColor = createVar('bg-color');
const borderColor = createVar('border-color');
const hoverColor = createVar('hover-color');

export const badge = style({
    vars: {
        [bgColor]: themeColor,
        [borderColor]: themeColor,
        [hoverColor]: theme.colors.alpha.base[8],
        [textColor]: theme.colors.solid.base[1],
        [themeColor]: theme.colors.solid.base[11],
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
    height: 25,
    justifyContent: 'center',
    lineHeight: 1.15,
    padding: '0 1rem',
    position: 'relative',
    textTransform: 'uppercase',
    userSelect: 'none',
    width: 'fit-content',

    selectors: {
        '&[data-type="close"]': {
            paddingRight: '.2rem',
        },
    },
});

export const pointer = style({
    cursor: 'pointer',
});

export const button = style({
    vars: {
        [hoverColor]: theme.colors.alpha.base[8],
    },
    background: 'transparent',
    border: 'none',
    borderRadius: 999,
    color: textColor,
    paddingTop: '0.1rem',

    ':hover': {
        background: hoverColor,
    },
});

export const content = style({
    display: 'block flex',
    gap: 6,
    maxWidth: '50ch',
    overflow: 'hidden',
    paddingTop: '0.1rem',
    whiteSpace: 'nowrap',
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
        [themeColor]: theme.colors.solid.warning[9],
    },
});
