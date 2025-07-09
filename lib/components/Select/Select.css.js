// Select.css.ts
import { style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

export const container = style({
    position: 'relative',
    border: '1px solid #ccc',
    borderRadius: 6,
    padding: `${theme.spacing.padding[1]} ${theme.spacing.padding[2]}`,
    minHeight: 40,
    cursor: 'text',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'white',
});

export const badgesContainer = style({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 6,
    flex: '1 1 auto',
    minWidth: 0,
});

export const badge = style({
    backgroundColor: '#e0e7ff',
    color: '#3730a3',
    padding: `${theme.spacing.padding[1]} ${theme.spacing.padding[2]}`,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.font.size[1],
    userSelect: 'none',
    maxWidth: '100%',
});

export const removeButton = style({
    background: 'transparent',
    border: 'none',
    marginLeft: 6,
    cursor: 'pointer',
    fontWeight: theme.font.weight.bold,
    color: '#3730a3',
    padding: `${theme.spacing.padding[0]} ${theme.spacing.padding[1]}`,
    lineHeight: theme.font.base.lineHeight,
    fontSize: '1rem',
    userSelect: 'none',
    transition: 'color 0.2s ease-in-out',

    selectors: {
        '&:hover, &:focus': {
            color: '#1e40af',
            outline: 'none',
        },
    },
});

export const input = style({
    flex: '1 1 120px',
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    minWidth: 50,
    padding: `${theme.spacing.padding[1]} ${theme.spacing.padding[0]}`,
    background: 'transparent',
    color: '#111827',
    userSelect: 'text',

    '::placeholder': {
        color: '#9ca3af',
    },
});

export const clearAllButton = style({
    background: 'transparent',
    border: 'none',
    color: '#6b7280',
    cursor: 'pointer',
    fontSize: '0.875rem',
    padding: `${theme.spacing.padding[1]} ${theme.spacing.padding[2]}`,
    userSelect: 'none',
    transition: 'color 0.2s ease-in-out',

    selectors: {
        '&:hover, &:focus': {
            color: '#374151',
            outline: 'none',
        },
    },
});

export const zeroState = style({
    color: '#9ca3af',
    fontSize: '0.9rem',
    padding: `${theme.spacing.padding[1]} ${theme.spacing.padding[2]}`,
});

export const limitMessage = style({
    color: '#b91c1c',
    fontSize: '0.9rem',
    padding: `${theme.spacing.padding[1]} ${theme.spacing.padding[2]}`,
    fontWeight: theme.font.weight.semibold,
});

export const suggestionsList = style({
    margin: 0,
    padding: theme.spacing.padding[0],
    listStyle: 'none',
    maxHeight: 150,
    overflowY: 'auto',
    fontSize: '1rem',
    borderRadius: 4,
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    outline: 'none',
});

export const suggestion = style({
    padding: `${theme.spacing.padding[2]} ${theme.spacing.padding[3]}`,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    userSelect: 'none',

    selectors: {
        '&[data-highlighted="true"], &:hover': {
            backgroundColor: '#e0e7ff',
            color: '#3730a3',
        },
    },
});

export const noResults = style({
    padding: `${theme.spacing.padding[2]} ${theme.spacing.padding[3]}`,
    color: '#9ca3af',
    userSelect: 'none',
    fontStyle: 'italic',
});

export const dropdownDisabledOverlay = style({
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    pointerEvents: 'none',
    borderRadius: 4,
});
