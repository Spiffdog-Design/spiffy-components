import { globalStyle } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

const poppins = 'Poppins';

globalStyle('*, *:after, *:before', {
    boxSizing: 'border-box',
    margin: 0,
});
globalStyle('html, body, #root', {
    fontFamily: poppins,
    height: '100%',
    minHeight: '100vh',
    width: '100%',
});
globalStyle('html', {
    fontSize: '62.5%',
});
globalStyle('body', {
    lineHeight: 1.65,
    color: theme.colors.solid.base[12],
    fontSize: '1.6rem',
    fontStyle: 'normal',
    fontWeight: 400,
});

globalStyle('img, picture, video, canvas, svg', {
    display: 'block',
    maxWidth: '100%',
});
globalStyle('input, button, textarea, select', {
    fontFamily: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6, em, small, span, strong, .text-caption', {
    color: 'inherit',
    fontFamily: 'inherit',
    hyphens: 'auto',
    margin: 0,
    overflowWrap: 'break-word',
    lineHeight: 1.15,
});
globalStyle('h1, h2, h3, h4, h5, h6, strong', {
    fontWeight: 600,
});
globalStyle('h1', { fontSize: '3.24rem' });
globalStyle('h2', { fontSize: '2.88rem' });
globalStyle('h3', { fontSize: '2.56rem' });
globalStyle('h4', { fontSize: '2.27rem' });
globalStyle('h5', { fontSize: '2.02rem' });
globalStyle('h6', { fontSize: '1.80rem' });
globalStyle('.text-caption', { fontSize: '1.42rem' });
globalStyle('small', {
    fontSize: '1.26rem',
    color: theme.colors.solid.base[11],
});
globalStyle('em', {
    fontStyle: 'oblique',
    fontStyle: 'italic',
});
globalStyle('code', {
    fontFamily: `'Courier New', Courier, monospace`,
});
globalStyle('pre', {
    backgroundColor: theme.colors.solid.base[5],
    border: `1px solid ${theme.colors.solid.base[7]}`,
    color: theme.colors.solid.base[11],
    padding: '.5rem 1.5rem',
});

globalStyle('hr', {
    border: 'none',
    borderTop: `1px solid ${theme.colors.solid.base[10]}`,
    margin: '1rem 0',
    width: '100%',
});
