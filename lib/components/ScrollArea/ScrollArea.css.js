// src/components/Button/Tooltip.css.js
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

export const root = style({
    backgroundColor: theme.colors.solid.base[1],
    borderRadius: '4px',
    boxShadow: `0 2px 10px ${theme.colors.solid.base[4]}`,
    color: theme.colors.solid.base[11],
    overflow: 'hidden',
    height: '100%',
    width: '100%',
});

export const viewport = style({
    width: '100%',
    height: '100%',
    padding: 4,
    borderRadius: 'inherit',
});

export const scrollbar = style({
    display: 'flex',
    userSelect: 'none',
    touchAction: 'none',
    padding: 2,
    background: theme.colors.solid.base[3],
    transition: `background 160ms ease-out`,
    ':hover': {
        background: theme.colors.solid.primary[4],
    },
    selectors: {
        '&[data-orientation="vertical"]': {
            width: 15,
        },
        '&[data-orientation="horizontal"]': {
            flexDirection: 'column',
            height: 15,
        },
    },
});

export const thumb = style({
    flex: 1,
    background: theme.colors.solid.base[9],
    borderRadius: 15,
    position: 'relative',
    ':hover': {
        background: theme.colors.solid.primary[10],
    },
    ':before': {
        content: "''",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        minWidth: 44,
        minHeight: 44,
    },
});

export const corner = style({
    background: theme.colors.solid.primary[5],
});
