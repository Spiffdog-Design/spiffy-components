// src/components/Button/Button.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
const themeColor = createVar('theme-color');

export const button = style({
    vars: {
        [themeColor]: theme.colors.solid.base[10],
    },
    alignItems: 'center',
    background: themeColor,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: themeColor,
    borderRadius: theme.border.radius[0],
    color: theme.colors.solid.base[1],
    cursor: 'pointer',
    display: 'inline-flex',
    flexDirection: 'row',
    fontSize: theme.font.size[2],
    fontWeight: theme.font.weight.semibold,
    gap: theme.spacing.gap[2],
    height: 'fit-content',
    justifyContent: 'center',
    lineHeight: theme.font.base.lineHeight,
    minHeight: '4.0rem',
    padding: `${theme.spacing.padding[1]} ${theme.spacing.padding[2]}`,
    position: 'relative',
    textTransform: 'uppercase',
    userSelect: 'none',
    width: 'fit-content',

    ':hover': {
        background: `hsl(from ${themeColor} h s calc(l + 10))`,
        borderColor: `hsl(from ${themeColor} h s calc(l + 10))`,
    },
    ':disabled': {
        background: `hsl(from ${themeColor} h 0 l / 0.5)`,
        borderColor: 'transparent',
        cursor: 'not-allowed',
    },
    '&:focus, &:focus-visible': {
        outline: `2px solid ${theme.colors.solid.base[1]}`,
        boxShadow: `0 0 0 5px ${theme.colors.solid.primary[11]}`,
    },
    '&.rounded': {
        borderRadius: theme.border.radius[6],
    },
});

export const compact = style({
    fontSize: theme.font.size[1],
    padding: `${theme.spacing.padding[0]} ${theme.spacing.padding[1]}`,
    minHeight: '3rem',
});

export const content = style({
    display: 'block flex',
    alignItems: 'center',
    gap: theme.spacing.gap[2],
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: '50ch',
    width: 'calc(100%)',
});

export const busy = style({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,

    display: 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backdropFilter: 'blur(3px)',
    height: '100%',
    width: '100%',

    '& svg': {
        fill: themeColor,
    },
    '&.compact': {
        padding: `${theme.spacing.padding[2]} ${theme.spacing.padding[3]}`,
    },
    '&.rounded': {
        borderRadius: theme.border.radius[6],
    },
    '&.show': {
        display: 'flex',
    },
});

export const basic = style({
    background: 'transparent',
    borderColor: 'transparent',
    color: themeColor,

    selectors: {
        '&:hover': {
            background: `hsl(from ${themeColor} h s calc(l + 40))`,
            borderColor: 'transparent',
            color: themeColor,
        },
        '&:disabled': {
            background: 'transparent',
            borderColor: 'transparent',
            color: `hsl(from ${themeColor} h 0 l / 0.5)`,
        },
        '&[data-theme="dark"]:hover': {
            background: `hsl(from ${themeColor} h s l / 0.25)`,
            borderColor: 'transparent',
            color: themeColor,
        },
    },
});

export const outline = style({
    background: 'transparent',
    borderColor: themeColor,
    color: themeColor,

    selectors: {
        '&:hover': {
            background: `hsl(from ${themeColor} h s calc(l + 40))`,
            borderColor: themeColor,
            color: themeColor,
        },
        '&:disabled': {
            background: 'transparent',
            borderColor: `hsl(from ${themeColor} h 0 l / 0.5)`,
            color: `hsl(from ${themeColor} h 0 l / 0.5)`,
        },
        '&[data-theme="dark"]:hover': {
            background: `hsl(from ${themeColor} h s l / 0.25)`,
            borderColor: themeColor,
            color: themeColor,
        },
    },
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
