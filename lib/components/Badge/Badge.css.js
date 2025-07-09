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
    fontSize: theme.font.size[1],
    fontWeight: theme.font.weight.semibold,
    gap: theme.spacing.gap[0],
    minHeight: 26,
    justifyContent: 'center',
    lineHeight: theme.font.base.lineHeight,
    padding: `${theme.spacing.padding[0]} ${theme.spacing.padding[2]}`,
    position: 'relative',
    textTransform: 'uppercase',
    userSelect: 'none',
    width: 'fit-content',

    selectors: {
        '&[data-type="close"]': {
            paddingRight: theme.spacing.padding[0],
        },
    },
});

export const pointer = style({
    cursor: 'pointer',
});

export const content = style({
    display: 'block flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.gap[2],
    maxWidth: '50ch',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: '100%',
    width: '100%',
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

export const closeButton = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

    background: 'transparent',
    border: 'none',
    borderRadius: 9999,
    color: textColor,
    width: 30,
    height: 22,
    margin: 0,
    padding: theme.spacing.padding[0],

    selectors: {
        '&:hover': {
            background: `hsl(from ${themeColor} h s calc(l - 15) / 0.75)`,
        },
        [`${basic} &:hover`]: {
            background: `hsl(from ${themeColor} h s l / 0.25)`,
        },
        [`${outline} &:hover`]: {
            background: `hsl(from ${themeColor} h s l / 0.25)`,
        },
    },
});
