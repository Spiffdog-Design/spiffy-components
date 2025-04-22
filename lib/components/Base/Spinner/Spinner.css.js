// src/components/Button/Button.css.js
import { keyframes, style } from '@vanilla-extract/css';

const rotate = keyframes({
    from: { transform: 'scale(1) rotate(0deg)' },
    to: { transform: 'scale(1) rotate(360deg)' },
});

export const animated = style({
    animationName: rotate,
    animationDuration: '1000ms',
    animationIterationCount: 'infinite',
    height: '100%',
    width: '100%',
});
