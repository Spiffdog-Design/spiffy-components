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
    gap: 8,
    width: '100%',
});
export const badgeListRemaining = style({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    width: '100%',
});

export const popover = style({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
});

export const measuringContainer = style({
    position: 'absolute',
    backgroundColor: 'transparent',
    visibility: 'hidden',
    pointerEvents: 'none',
    height: 0,
    overflow: 'hidden',
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
