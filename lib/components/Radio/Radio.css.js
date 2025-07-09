import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
const themeColor = createVar('theme-color');

export const radio = style({
    vars: {
        [themeColor]: theme.colors.solid.base[10],
    },
    cursor: 'pointer',
    display: 'inline-block',
    height: 25,
    width: 25,
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
