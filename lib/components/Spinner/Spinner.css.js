// src/components/Button/Button.css.js
import { createVar, keyframes, style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

export const colorVar = createVar('color');
export const sizeVar = createVar('size');

const solid12 = createVar('solid-12');
const transparent = createVar('transparent');

const rotation = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
});

const rotationBack = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(-360deg)' },
});

export const spinner = style({
    vars: {
        [sizeVar]: `48px`,
        [solid12]: theme.colors.solid.base[11],
        [transparent]: 'transparent',
    },

    position: 'relative',
    display: 'inline-block',

    animation: `${rotation} 1.0s linear infinite`,
    borderColor: `${solid12} ${solid12} ${transparent} ${transparent}`,
    borderStyle: 'solid',
    borderRadius: '50%',
    borderWidth: `calc(${sizeVar} * 0.0625)`,
    boxSizing: 'border-box',
    height: `${sizeVar}`,
    width: `${sizeVar}`,

    selectors: {
        '&::after, &::before': {
            position: 'absolute',
            content: "''",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            height: `calc(${sizeVar} * 0.833)`,
            margin: 'auto',
            width: `calc(${sizeVar} * 0.833)`,

            animation: `${rotationBack} 0.5s linear infinite`,
            borderColor: `${theme.colors.solid.warning[9]} ${theme.colors.solid.warning[9]} ${transparent} ${transparent}`,
            borderStyle: 'solid',
            borderRadius: '50%',
            borderWidth: `calc(${sizeVar} * 0.0625)`,
            boxSizing: 'border-box',
            transformOrigin: 'center center',
        },
        '&::before': {
            width: `calc(${sizeVar} * 0.6666)`,
            height: `calc(${sizeVar} * 0.6666)`,
            borderColor: `${theme.colors.solid.primary[9]} ${theme.colors.solid.primary[9]} ${transparent} ${transparent}`,
            animation: `${rotation} 1.5s linear infinite`,
        },
    },
});
