// src/components/Button/Button.css.js
import { createVar, style } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

const alpha3 = createVar('--alpha-3');
const solid11 = createVar('--solid-11');
const solid10 = createVar('--solid-10');
const solid4 = createVar('--solid-4');

export const actions = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'anchor-center',
    gap: 12,
    backgroundColor: theme.colors.solid.base[4],
    width: '100%',
});
export const children = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    color: theme.colors.solid.base[12],
    height: 'fit-content',
    overflow: 'hidden',
    overflowY: 'auto',
    padding: 24,
});
export const container = style({
    vars: {
        [solid10]: theme.colors.solid.base[10],
        [solid11]: theme.colors.solid.base[11],
    },
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.solid.base[1],
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 6,
    borderColor: solid11,
    boxShadow: `rgb(from ${solid10} r g b / 0.65) 0px 10px 20px -8px, rgb(from ${solid11} r g b / 0.5) 0px 4px 8px -12px;`,
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.solid.base[4],
    padding: '8px 12px',
});
export const overlay = style({
    vars: {
        [alpha3]: theme.colors.alpha.base[3],
    },
    backgroundColor: alpha3,
    backdropFilter: 'blur(2px)',
    inset: 0,
    position: 'fixed',
});
export const title = style({
    vars: {
        [solid11]: theme.colors.solid.base[11],
    },
    margin: 0,
    fontWeight: 700,
    color: solid11,
    fontSize: '1.6rem',
    textTransform: 'uppercase',
});

export const alert = style({
    vars: {
        [alpha3]: theme.colors.alpha.alert[3],
        [solid10]: theme.colors.solid.alert[10],
        [solid11]: theme.colors.solid.alert[11],
        [solid4]: theme.colors.solid.alert[4],
    },
});
export const success = style({
    vars: {
        [alpha3]: theme.colors.alpha.success[3],
        [solid10]: theme.colors.solid.success[10],
        [solid11]: theme.colors.solid.success[11],
        [solid4]: theme.colors.solid.success[4],
    },
});
export const primary = style({
    vars: {
        [alpha3]: theme.colors.alpha.primary[3],
        [solid10]: theme.colors.solid.primary[10],
        [solid11]: theme.colors.solid.primary[11],
        [solid4]: theme.colors.solid.primary[4],
    },
});
export const warning = style({
    vars: {
        [alpha3]: theme.colors.alpha.warning[3],
        [solid10]: theme.colors.solid.warning[10],
        [solid11]: theme.colors.solid.warning[11],
        [solid4]: theme.colors.solid.warning[4],
    },
});
