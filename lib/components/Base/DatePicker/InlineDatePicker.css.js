import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

const themeColor = createVar('theme-color');

export const picker = style({
    vars: {
        [themeColor]: theme.colors.solid.base[9],
    },
});

export const alert = style({
    vars: {
        [themeColor]: theme.colors.solid.alert[9],
    },
});

export const base = style({
    vars: {
        [themeColor]: theme.colors.solid.base[9],
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
