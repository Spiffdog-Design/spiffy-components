// src/components/BaseInput/BaseInput.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables

const inputColor = createVar('--input-color');
const rootBackground = createVar('--root-background');
const rootColor = createVar('--root-color');

export const container = style({
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

    '&:has(input:hover)': {
        vars: {
            [rootBackground]: inputColor,
        },
    },
    '&:has(input:focus)': {
        vars: {
            [rootBackground]: inputColor,
        },
    },
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

/*
const BaseInput = styled.input`
    --color: var(--primary-02);
    --background: transparent;
    background: var(--background);
    border: 0;
    color: var(--base-12);
    height: 38px;
    outline: none;
    width: 100%;
    padding-left: 8px;

    &:hover,
    &:focus {
        --background: var(--color);
    }
    &[type='number'] {
        appearance: textfield;
        -moz-appearance: textfield;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &.alert {
        --color: var(--alert-02);
    }
    &.success {
        --color: var(--success-02);
    }
    &.warning {
        --color: var(--warning-02);
    }
`;

const Root = styled.div`
    --color: var(--primary-12);

    display: grid;
    grid-template-columns: 1fr auto auto;

    border-color: var(--color);
    border-style: solid;
    border-width: 3px;
    overflow: hidden;
    width: 100%;

    & button {
        height: 38px;
    }

    &.alert {
        --color: var(--alert-09);
    }
    &.success {
        --color: var(--success-09);
    }
    &.warning {
        --color: var(--warning-09);
    }
`;
*/
