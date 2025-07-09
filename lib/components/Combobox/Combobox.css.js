import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

const themeColor = createVar('theme-color');

export const root = style({
    vars: {
        [themeColor]: theme.colors.solid.base[10],
    },
    border: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.gap[1],

    color: themeColor,
    padding: theme.spacing.padding[2],
    width: '100%',
});
export const row = style({
    flexDirection: 'row',
    gap: theme.spacing.gap[3],
    alignItems: 'center',
});

export const comboboxInput = style({
    width: '100%',
    borderStyle: 'none',
    backgroundColor: theme.colors.solid.base[3],
    fontSize: theme.font.size[2],
    lineHeight: theme.font.base.lineHeight,
    color: theme.colors.solid.base[12],
    padding: `${theme.spacing.padding[1]} ${theme.spacing.padding[2]}`,

    ':focus-visible': {
        outline: `1px solid ${theme.colors.solid.base[1]}`,
        boxShadow: `0 0 0 3px ${theme.colors.solid.primary[11]}`,
    },
});
export const comboSelectItem = style({
    display: 'flex',
    cursor: 'default',
    scrollMargin: '0.5rem',
    alignItems: 'center',
    gap: theme.spacing.gap[1],
    borderRadius: theme.border.radius[0],
    padding: `${theme.spacing.padding[2]}${theme.spacing.padding[3]}`,
    outline: 'none !important',
    width: '100%',
    scrollMarginTop: '3.5rem',

    selectors: {
        '&:hover': {
            backgroundColor: theme.colors.solid.base[8],
            color: theme.colors.solid.base[1],
        },
        '&[aria-disabled="true"]': {
            opacity: 0.5,
        },
        '&[aria-selected="true"]': {
            backgroundColor: themeColor,
            color: theme.colors.solid.base[1],
        },
    },
});

export const popover = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,

    backgroundColor: theme.colors.solid.base[1],
    borderColor: theme.colors.solid.base[12],
    borderStyle: 'solid',
    borderWidth: 1,
    color: theme.colors.solid.base[12],
    maxHeight: 'min(var(--popover-available-height, 300px), 300px)',
    overscrollBehavior: 'contain',
    overflow: 'auto',
    padding: `${theme.spacing.padding[2]} ${theme.spacing.padding[2]}`,
    zIndex: 50,
});

export const comboSelectItemCompact = style({
    fontSize: theme.font.size[1],
    padding: `${theme.spacing.padding[1]} ${theme.spacing.padding[2]}`,
});

export const alert = style({
    vars: {
        [themeColor]: theme.colors.solid.alert[10],
    },
});
export const primary = style({
    vars: {
        [themeColor]: theme.colors.solid.primary[10],
    },
});
export const success = style({
    vars: {
        [themeColor]: theme.colors.solid.success[10],
    },
});
export const warning = style({
    vars: {
        [themeColor]: theme.colors.solid.warning[10],
    },
});
