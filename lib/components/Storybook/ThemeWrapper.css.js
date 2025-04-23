// src/components/ThemeWrapper/ThemeWrapper.css.js
import { style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

export const themeWrapper = style({
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    border: `1px solid ${theme.colors.solid.base[7]}`,
    height: '100%',
    width: '100%',
});

export const line = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: `${theme.colors.solid.base[4]}`,
    padding: 8,
    width: '100%',

    '& .title': {
        color: `${theme.colors.solid.base[11]}`,
        paddingLeft: 8,
    },
});

export const content = style({
    backgroundColor: `${theme.colors.solid.base[1]}`,
    padding: 20,
    height: '100%',
});

export const actions = style({
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    height: '100%',
});
