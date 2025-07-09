import { style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

export const root = style({
    position: 'relative',
    backgroundColor: 'transparent',
    color: theme.colors.solid.base[12],
    cursor: 'pointer',
    fontWeight: theme.font.weight.semibold,
    fontSize: theme.font.size[1],
    textTransform: 'uppercase',
    flexShrink: 0,
    userSelect: 'none',
    width: 'fit-content',
});

export const required = style({
    ':after': {
        position: 'absolute',
        top: -4,
        right: -12,
        color: theme.colors.solid.alert[9],
        content: '*',
        fontSize: theme.font.size[3],
        fontWeight: theme.font.weight.medium,
    },
});
