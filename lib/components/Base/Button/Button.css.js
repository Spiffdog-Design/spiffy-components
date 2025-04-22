// src/components/Button/Button.css.js
import { style } from '@vanilla-extract/css';
import { theme } from '../../../themes/theme.css';

export const button = style({
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: theme.colors.solid.primary[6],
    color: theme.colors.solid.base[12],
});
