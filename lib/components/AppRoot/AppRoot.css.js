import { globalStyle } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

globalStyle('*, *:after, *:before', {
    boxSizing: 'border-box',
    fontSmooth: 'antialiased',
    margin: 0,
});
globalStyle('html, body, #root', {
    fontFamily: theme.font.family.base,
    height: '100%',
    minHeight: '100vh',
    width: '100%',
});
globalStyle('html', {
    fontSize: '62.5%',
});
globalStyle('body', {
    ...theme.font.base,
    color: theme.colors.solid.base[12],
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
});
globalStyle('h1, h2, h3, h4, h5, h6', {
    fontWeight: theme.font.weight.medium,
});
globalStyle('strong', {
    fontWeight: theme.font.weight.semibold,
});
globalStyle('h1', { fontSize: theme.font.size[8] });
globalStyle('h2', { fontSize: theme.font.size[7] });
globalStyle('h3', { fontSize: theme.font.size[6] });
globalStyle('h4', { fontSize: theme.font.size[5] });
globalStyle('h5', { fontSize: theme.font.size[4] });
globalStyle('h6', { fontSize: theme.font.size[3] });
globalStyle('.text-caption', { fontSize: theme.font.size[2] });
globalStyle('small', {
    fontSize: theme.font.size[1],
    color: theme.colors.solid.base[11],
});
globalStyle('em', {
    fontStyle: 'oblique',
    fontStyle: 'italic',
});
globalStyle('code', {
    fontFamily: theme.font.family.mono,
});
globalStyle('pre', {
    backgroundColor: theme.colors.solid.base[5],
    border: `1px solid ${theme.colors.solid.base[7]}`,
    color: theme.colors.solid.base[11],
    padding: `${theme.spacing.padding[1]} ${theme.spacing.padding[2]}`,
});

globalStyle('hr', {
    border: 'none',
    borderTop: `1px solid ${theme.colors.solid.base[10]}`,
    margin: '1rem 0',
    width: '100%',
});
