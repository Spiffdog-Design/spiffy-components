// src/components/Base/Badge/Badge.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
const color = createVar('color');

export const badgeList = style({
    vars: {
        [color]: theme.colors.solid.base[9],
    },
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    flexWrap: 'wrap',
    backgroundColor: theme.colors.solid.base[1],
});

export const border = style({
    border: `2px solid ${color}`,
    padding: '0.5rem',
});

export const rounded = style({
    borderRadius: 16,
    padding: '0.5rem',
});

export const alert = style({
    vars: {
        [color]: theme.colors.solid.alert[9],
    },
});

export const base = style({
    vars: {
        [color]: theme.colors.solid.base[9],
    },
});

export const primary = style({
    vars: {
        [color]: theme.colors.solid.primary[9],
    },
});

export const success = style({
    vars: {
        [color]: theme.colors.solid.success[9],
    },
});

export const warning = style({
    vars: {
        [color]: theme.colors.solid.warning[9],
    },
});
