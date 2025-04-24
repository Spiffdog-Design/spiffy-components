// src/components/Label/Label.css.js
import { style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

export const root = style({
    position: 'relative',
    backgroundColor: 'transparent',
    color: theme.colors.solid.base[12],
    fontWeight: 700,
    fontSize: '1.3rem',
    textTransform: 'uppercase',
    flexShrink: 0,
    width: 'fit-content',
});

export const required = style({
    ':after': {
        position: 'absolute',
        top: -2,
        right: -12,
        color: theme.colors.solid.alert[9],
        content: '*',
        fontSize: '1.6rem',
        fontWeight: 500,
    },
});
