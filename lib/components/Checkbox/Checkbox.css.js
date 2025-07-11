import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
const themeColor = createVar('theme-color');

export const checkbox = style({
    vars: {
        [themeColor]: theme.colors.solid.base[10],
    },
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 16,
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
