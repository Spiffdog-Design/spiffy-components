// src/components/Base/Badge/Badge.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
const bgColor = createVar('background-color');
const color = createVar('color');

export const badgeList = style({
    vars: {
        [bgColor]: theme.colors.solid.base[1],
        [color]: theme.colors.solid.base[9],
    },
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    flexWrap: 'wrap',
    padding: '.75rem',
    backgroundColor: bgColor,
    border: `2px solid ${color}`,
});

export const rounded = style({
    borderRadius: 24,
});

export const alert = style({
    vars: {
        [bgColor]: theme.colors.solid.alert[4],
        [color]: theme.colors.solid.alert[9],
    },
});

export const primary = style({
    vars: {
        [bgColor]: theme.colors.solid.primary[4],
        [color]: theme.colors.solid.primary[9],
    },
});

export const success = style({
    vars: {
        [bgColor]: theme.colors.solid.success[4],
        [color]: theme.colors.solid.success[9],
    },
});

export const warning = style({
    vars: {
        [bgColor]: theme.colors.solid.warning[4],
        [color]: theme.colors.solid.warning[9],
    },
});
