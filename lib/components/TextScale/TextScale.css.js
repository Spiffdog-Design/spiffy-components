// src/components/Button/Button.css.js
import { style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.gap[1],
});
