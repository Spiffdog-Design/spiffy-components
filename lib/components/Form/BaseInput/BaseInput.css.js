// src/components/BaseInput/BaseInput.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables

const inputColor = createVar('--input-color');
const rootBackground = createVar('--root-background');
const rootColor = createVar('--root-color');

export const root = style({
    vars: {
        [rootColor]: theme.colors.solid.base[12],
        [rootBackground]: 'transparent',
    },
    backgroundColor: rootBackground,
    display: 'grid',
    gridTemplateColumns: '1fr auto auto',
    borderColor: rootColor,
    borderStyle: 'solid',
    borderWidth: 3,
    overflow: 'hidden',
    width: '100%',

    '& button': {
        height: '100%',
    },
});
export const input = style({
    vars: {
        [inputColor]: theme.colors.solid.base[2],
    },
    backgroundColor: 'transparent',
    border: 0,
    color: theme.colors.solid.base[12],
    outline: 'none',
    width: '100%',
    padding: '1.17rem',
    paddingLeft: 8,

    "&[type='number']": {
        appearance: 'textfield',
        MozAppearance: 'textfield',
    },
    '::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
    },
});
export const actions = style({
    display: 'flex',
    flexDirection: 'row',
    padding: 2,
    gap: 4,
});

export const alert = style({
    vars: {
        [inputColor]: theme.colors.solid.alert[2],
        [rootColor]: theme.colors.solid.alert[9],
    },
});
export const primary = style({
    vars: {
        [inputColor]: theme.colors.solid.primary[2],
        [rootColor]: theme.colors.solid.primary[9],
    },
});
export const success = style({
    vars: {
        [inputColor]: theme.colors.solid.success[2],
        [rootColor]: theme.colors.solid.success[9],
    },
});
export const warning = style({
    vars: {
        [inputColor]: theme.colors.solid.warning[2],
        [rootColor]: theme.colors.solid.warning[9],
    },
});
