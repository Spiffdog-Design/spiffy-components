import { style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

export const menu = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.solid.base[2],
    borderColor: theme.colors.solid.base[4],
    borderRadius: '0.5rem',
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: `0 10px 15px -3px hsl(from ${theme.colors.solid.base[12]} h s l / 0.2), 0 4px 6px -4px hsl(from ${theme.colors.solid.base[12]} h s l / 0.2)`,
    color: theme.colors.solid.base[12],
    maxHeight: 'var(--popover-available-height)',
    maxWidth: 'max(var(--popover-available-width), calc(100% - calc(var(--popover-overflow-padding) * 2)))',
    minWidth: 180,
    outline: 'none !important',
    overflow: 'auto',
    overscrollBehavior: 'contain',
    padding: theme.spacing.padding[1],
    width: 'max-content',
    zIndex: 50,
});

export const menuBar = style({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    maxWidth: 'fit-content',
});

export const menuBarItem = style({
    height: '2.5rem',
    borderRadius: '0.375rem',
    padding: `${theme.spacing.padding[0]} ${theme.spacing.padding[2]}`,
    selectors: {
        '&:focus': {
            backgroundColor: theme.colors.solid.primary[10],
            color: theme.colors.solid.base[1],
        },
    },
});

export const menuButton = style({
    backgroundColor: theme.colors.solid.base[1],
});

export const menuItem = style({
    display: 'flex',
    backgroundColor: 'transparent',
    color: theme.colors.solid.base[12],
    border: 0,
    cursor: 'default',
    scrollMargin: '0.5rem',
    alignItems: 'center',
    gap: theme.spacing.gap[1],
    padding: `${theme.spacing.padding[2]} ${theme.spacing.padding[3]}`,
    outline: 'none',
    boxShadow: `none`,

    selectors: {
        '&:focus-visible, &:hover': {
            outline: `2px solid ${theme.colors.solid.base[1]}`,
            boxShadow: `0 0 0 5px ${theme.colors.solid.primary[11]}`,
            backgroundColor: theme.colors.solid.primary[10],
            color: 'white',
        },
        '&[aria-disabled="true"]': {
            opacity: 0.25,
        },
        '&[aria-expanded="true"]': {
            backgroundColor: theme.colors.solid.primary[10],
            color: 'white',
        },
    },
});

export const menuLabel = style({
    flex: '1 1 0%',
    paddingRight: theme.spacing.padding[4],
});

export const separator = style({
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    height: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: theme.colors.solid.base[10],
});
