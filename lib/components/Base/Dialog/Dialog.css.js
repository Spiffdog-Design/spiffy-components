// src/components/Button/Button.css.js
import { createVar, style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

export const closeIconFillVar = createVar({
    syntax: '<color>',
    inherits: false,
    initialValue: theme.colors.solid.primary[11],
});
export const closeIconHoverVar = createVar({
    syntax: '<color>',
    inherits: false,
    initialValue: theme.colors.solid.primary[11],
});
export const containerColor1Var = createVar({
    syntax: '<color>',
    inherits: false,
    initialValue: theme.colors.solid.primary[11],
});
export const containerColor2Var = createVar({
    syntax: '<color>',
    inherits: false,
    initialValue: theme.colors.solid.primary[11],
});
export const headerColorVar = createVar({
    syntax: '<color>',
    inherits: false,
    initialValue: theme.colors.solid.primary[4],
});
export const overlayColorVar = createVar({
    syntax: '<color>',
    inherits: false,
    initialValue: theme.colors.alpha.primary[4],
});
export const titleColorVar = createVar({
    syntax: '<color>',
    inherits: false,
    initialValue: theme.colors.solid.primary[11],
});

export const actions = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    backgroundColor: theme.colors.solid.base[4],
    width: '100%',
});
export const children = style({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.6rem',
    gap: 8,
    color: theme.colors.solid.base[12],
    height: 'fit-content',
    overflow: 'hidden',
    overflowY: 'auto',
    padding: 24,
});
export const closeButton = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
    borderRadius: 4,
    padding: 4,

    '& svg': {
        fill: theme.colors.solid.primary[11],
    },
    '&:hover': {
        backgroundColor: theme.colors.solid.primary[7],
    },

    '&.alert': {
        vars: {
            [closeIconFillVar]: theme.colors.solid.alert[11],
            [closeIconHoverVar]: theme.colors.solid.alert[7],
        },
        '& svg': {
            fill: closeIconFillVar,
        },
    },
    '&.success': {
        vars: {
            [closeIconFillVar]: theme.colors.solid.success[11],
            [closeIconHoverVar]: theme.colors.solid.success[7],
        },
    },
    '&.warning': {
        vars: {
            [closeIconFillVar]: theme.colors.solid.warning[11],
            [closeIconHoverVar]: theme.colors.solid.warning[7],
        },
    },
});
export const container = style({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.solid.base[1],
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 6,
    borderColor: containerColor1Var,
    boxShadow: `rgb(from ${containerColor2Var} r g b / 0.65) 0px 10px 20px -8px, rgb(from ${containerColor1Var} r g b / 0.5) 0px 4px 8px -12px;`,
    position: 'fixed',
    maxHeight: '85vh',
    maxWidth: '90vw',
    minWidth: '200px',
    overflow: 'auto',
    height: 'fit-content',
    width: 'fit-content',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    '&:focus': {
        outline: 'none',
    },

    '&.alert': {
        vars: {
            [containerColor1Var]: theme.colors.solid.alert[10],
            [containerColor2Var]: theme.colors.solid.alert[11],
        },
    },
    '&.success': {
        vars: {
            [containerColor1Var]: theme.colors.solid.success[10],
            [containerColor2Var]: theme.colors.solid.success[11],
        },
    },
    '&.warning': {
        vars: {
            [containerColor1Var]: theme.colors.solid.warning[10],
            [containerColor2Var]: theme.colors.solid.warning[11],
        },
    },
});
export const content = style({
    display: 'flex',
    flexDirection: 'column',
});
export const description = style({
    color: theme.colors.solid.base[12],
    fontSize: '1.2rem',
    margin: 0,
});
export const footer = style({
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: 24,
    backgroundColor: theme.colors.solid.base[4],
    margin: 0,
    padding: '8px 12px',
});
export const footerText = style({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',

    color: theme.colors.solid.base[12],
    fontSize: '1.2rem',
});
export const heading = style({
    backgroundColor: headerColorVar,
    padding: '8px 12px',

    '&.alert': {
        vars: {
            [headerColorVar]: theme.colors.solid.alert[4],
        },
    },
    '&.success': {
        vars: {
            [headerColorVar]: theme.colors.solid.success[4],
        },
    },
    '&.warning': {
        vars: {
            [headerColorVar]: theme.colors.solid.warning[4],
        },
    },
});
export const overlay = style({
    backgroundColor: overlayColorVar,
    backdropFilter: 'blur(2px)',
    inset: 0,
    position: 'fixed',

    '&.alert': {
        vars: {
            [overlayColorVar]: theme.colors.alpha.alert[4],
        },
    },
    '&.success': {
        vars: {
            [overlayColorVar]: theme.colors.alpha.success[4],
        },
    },
    '&.warning': {
        vars: {
            [overlayColorVar]: theme.colors.alpha.warning[4],
        },
    },
});
export const title = style({
    margin: 0,
    fontWeight: 700,
    color: titleColorVar,
    fontSize: '1.6rem',
    textTransform: 'uppercase',

    '&.alert': {
        vars: {
            [titleColorVar]: theme.colors.solid.alert[11],
        },
    },
    '&.success': {
        vars: {
            [titleColorVar]: theme.colors.solid.success[11],
        },
    },
    '&.warning': {
        vars: {
            [titleColorVar]: theme.colors.solid.warning[11],
        },
    },
});
