// src/components/Button/Button.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
const bgColor = createVar('background-color');
const color = createVar('color');
const borderColor = createVar('border-color');

const alpha4 = createVar('alpha-4');
const solid1 = createVar('solid-1');
const solid9 = createVar('solid-9');
const solid10 = createVar('solid-10');
const transparent = createVar('transparent');

export const base = style({
    vars: {
        [alpha4]: theme.colors.alpha.base[4],
        [solid1]: theme.colors.solid.base[1],
        [solid9]: theme.colors.solid.base[9],
        [solid10]: theme.colors.solid.base[10],
        [transparent]: 'transparent',

        [bgColor]: solid10,
        [borderColor]: transparent,
        [color]: solid1,
    },
    alignItems: 'center',
    // background: `linear-gradient(oklch(from ${bgColor} calc(l + .05) c h), oklch(from ${bgColor} calc(l - .05) c h))`,
    background: bgColor,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: borderColor,
    borderRadius: 'unset',
    color: color,
    cursor: 'pointer',
    display: 'inline-flex',
    flexDirection: 'row',
    fontSize: '1.6rem',
    fontWeight: '700',
    gap: 6,
    height: 'fit-content',
    justifyContent: 'center',
    lineHeight: 1.15,
    padding: '0.75rem 1.25rem',
    position: 'relative',
    textTransform: 'uppercase',
    width: 'fit-content',

    ':active': {
        opacity: 0.7,
    },
    ':hover': {
        vars: {
            [bgColor]: solid9,
        },
    },
    ':disabled': {
        vars: {
            [bgColor]: theme.colors.alpha.base[8],
        },
        cursor: 'not-allowed',
    },
    '&.rounded': {
        borderRadius: '2rem',
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

export const busy = style({
    display: 'none',
    position: 'absolute',
    backdropFilter: 'blur(3px)',
    height: '100%',
    padding: '0.25rem',
    right: 0,
    top: 0,
    width: '100%',

    '& svg': {
        fill: solid10,
    },
    '&.rounded': {
        borderRadius: '2rem',
    },
    '&.show': {
        display: 'block',
    },
});

export const basic = style({
    vars: {
        [bgColor]: transparent,
        [borderColor]: transparent,
        [color]: solid10,
    },
    background: bgColor,

    ':hover': {
        vars: {
            [bgColor]: alpha4,
            [color]: solid10,
        },
    },
    ':disabled': {
        vars: {
            [bgColor]: transparent,
            [color]: theme.colors.alpha.base[11],
        },
        cursor: 'not-allowed',
    },
});

export const outline = style({
    vars: {
        [bgColor]: transparent,
        [color]: solid10,
        [borderColor]: solid10,
    },
    ':hover': {
        vars: {
            [bgColor]: alpha4,
        },
    },
    ':disabled': {
        vars: {
            [bgColor]: transparent,
            [color]: theme.colors.alpha.base[10],
            [borderColor]: theme.colors.alpha.base[10],
        },
    },
});

export const alert = style({
    vars: {
        [alpha4]: theme.colors.alpha.alert[4],
        [solid1]: theme.colors.solid.alert[1],
        [solid9]: theme.colors.solid.alert[9],
        [solid10]: theme.colors.solid.alert[10],
    },
});

export const primary = style({
    vars: {
        [alpha4]: theme.colors.alpha.primary[4],
        [solid1]: theme.colors.solid.primary[1],
        [solid9]: theme.colors.solid.primary[9],
        [solid10]: theme.colors.solid.primary[10],
    },
});

export const success = style({
    vars: {
        [alpha4]: theme.colors.alpha.success[4],
        [solid1]: theme.colors.solid.success[1],
        [solid9]: theme.colors.solid.success[9],
        [solid10]: theme.colors.solid.success[10],
    },
});

export const warning = style({
    vars: {
        [alpha4]: theme.colors.alpha.warning[4],
        [solid1]: theme.colors.solid.warning[1],
        [solid9]: theme.colors.solid.warning[9],
        [solid10]: theme.colors.solid.warning[10],
    },
});
