// src/components/Button/Button.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
const bgColor = createVar('--background-color');
const color = createVar('--color');
const borderColor = createVar('--border-color');

const alpha4 = createVar('--alpha-4');
const solid11 = createVar('--solid-11');
const solid10 = createVar('--solid-11');
const solid1 = createVar('--solid-1');
const transparent = createVar('--transparent');

export const base = style({
    vars: {
        [alpha4]: theme.colors.alpha.base[4],
        [solid1]: theme.colors.solid.base[1],
        [solid10]: theme.colors.solid.base[10],
        [solid11]: theme.colors.solid.base[12],
        [transparent]: 'transparent',

        [bgColor]: solid11,
        [borderColor]: transparent,
        [color]: solid1,
    },
    alignItems: 'center',
    backgroundColor: bgColor,
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
    height: 'fit-content',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '0.25rem 1.00rem',
    position: 'relative',
    textTransform: 'uppercase',

    ':active': {
        opacity: 0.8,
    },
    ':hover': {
        vars: {
            [bgColor]: solid10,
        },
    },
    ':disabled': {
        vars: {
            [bgColor]: theme.colors.alpha.base[10],
        },
        cursor: 'not-allowed',
    },
    '&.rounded': {
        borderRadius: '2rem',
    },
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
        fill: solid11,
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
        [color]: solid11,
    },
    ':hover': {
        vars: {
            [bgColor]: alpha4,
            [color]: solid11,
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
        [color]: solid11,
        [borderColor]: solid11,
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
        [solid10]: theme.colors.solid.alert[10],
        [solid11]: theme.colors.solid.alert[11],
    },
});

export const primary = style({
    vars: {
        [alpha4]: theme.colors.alpha.primary[4],
        [solid1]: theme.colors.solid.primary[1],
        [solid10]: theme.colors.solid.primary[10],
        [solid11]: theme.colors.solid.primary[11],
    },
});

export const success = style({
    vars: {
        [alpha4]: theme.colors.alpha.success[4],
        [solid1]: theme.colors.solid.success[1],
        [solid10]: theme.colors.solid.success[10],
        [solid11]: theme.colors.solid.success[11],
    },
});

export const warning = style({
    vars: {
        [alpha4]: theme.colors.alpha.warning[4],
        [solid1]: theme.colors.solid.warning[1],
        [solid10]: theme.colors.solid.warning[10],
        [solid11]: theme.colors.solid.warning[11],
    },
});
