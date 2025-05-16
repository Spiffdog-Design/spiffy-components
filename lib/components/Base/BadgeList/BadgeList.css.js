// src/components/Base/Badge/Badge.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// css variables
const color = createVar('color');

export const badgeList = style({
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    width: 'fit-content',
});

export const tooltip = style({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
});

export const border = style({
    vars: {
        [color]: theme.colors.solid.base[10],
    },
    border: `2px solid ${color}`,
    padding: '0.5rem',
});

export const rounded = style({
    borderRadius: 16,
    padding: '0.5rem',
});

export const alert = style({
    vars: {
        [color]: theme.colors.solid.alert[10],
    },
});

export const base = style({
    vars: {
        [color]: theme.colors.solid.base[10],
    },
});

export const primary = style({
    vars: {
        [color]: theme.colors.solid.primary[10],
    },
});

export const success = style({
    vars: {
        [color]: theme.colors.solid.success[10],
    },
});

export const warning = style({
    vars: {
        [color]: theme.colors.solid.warning[10],
    },
});
