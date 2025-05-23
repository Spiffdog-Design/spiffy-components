import { keyframes, style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

const animation = keyframes({
    '0%': { backgroundColor: theme.colors.solid.alert[9] },
    '25%': { backgroundColor: theme.colors.solid.base[3] },
    '50%': { backgroundColor: theme.colors.solid.primary[9] },
    '75%': { backgroundColor: theme.colors.solid.base[3] },
    '100%': { backgroundColor: theme.colors.solid.warning[9] },
});

export const spinner = style({
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
});

export const threedot = style({
    position: 'relative',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.solid.base[3],
    color: theme.colors.solid.base[3],
    animation: `${animation}  1s infinite linear alternate`,
    animationDelay: '500ms',
    '&:before, &:after': {
        content: '""',
        display: 'inline-block',
        position: 'absolute',
        top: 0,
    },
    '&:before': {
        left: -15,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.solid.base[3],
        color: theme.colors.solid.base[3],
        animation: `${animation}  1s infinite linear alternate`,
        animationDelay: '0ms',
    },
    '&:after': {
        left: 15,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.solid.base[3],
        color: theme.colors.solid.base[3],
        animation: `${animation}  1s infinite alternate`,
        animationDelay: '1000ms',
    },
});

export const threedot1 = style({
    animationDelay: '0ms',
});
export const threedot2 = style({
    animationDelay: '250ms',
});
export const threedot3 = style({
    animationDelay: '500ms',
});
