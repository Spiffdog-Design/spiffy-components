// src/components/Button/Button.css.js
import { style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

export const base = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: 'fit-content',

    backgroundColor: theme.colors.solid.primary[10],
    border: 'none',
    color: theme.colors.solid.base[1],
    cursor: 'pointer',
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: '0.5rem 1rem',
    position: 'relative',

    ':hover': {
        backgroundColor: theme.colors.solid.primary[9],
    },
    '&.rounded': {
        borderRadius: '2rem',
    },
});

export const busy = style({
    display: 'none',
    position: 'absolute',
    backdropFilter: 'blur(3px)',
    height: '100%',
    padding: '0.25rem',
    right: 0,
    top: 0,
    width: '100%',

    '&.rounded': {
        borderRadius: '2rem',
    },
    '&.show': {
        display: 'block',
    },
});
