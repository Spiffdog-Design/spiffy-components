// src/themes/lightTheme.css.js
import { createTheme } from '@vanilla-extract/css';
import { theme } from './theme.css';

import { light } from '@spiffdog/spiffy-colors';

export const lightTheme = createTheme(theme, {
    ...theme,
    colors: {
        ...theme.colors,
        solid: {
            alert: { ...light.tomato },
            base: { ...light.slate },
            primary: { ...light.blue },
            success: { ...light.green },
            warning: { ...light.amber },
        },
        alpha: {
            alert: { ...light.tomatoA },
            base: { ...light.slateA },
            primary: { ...light.blueA },
            success: { ...light.greenA },
            warning: { ...light.amberA },
        },
        palette: {
            ...theme.colors.palette,
            ...light,
        },
    },
});
