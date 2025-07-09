// src/themes/darkTheme.css.js
import { createTheme } from '@vanilla-extract/css';
import { theme } from './theme.css';
import { defaultThemeValues } from './defaultTheme.js';

import { dark } from '@spiffdog/spiffy-colors';

const palette = { ...dark };
export const darkTheme = createTheme(theme, {
    ...defaultThemeValues,
    colors: {
        ...theme.colors,
        solid: {
            alert: { ...palette.red },
            base: { ...palette.slate },
            primary: { ...palette.blue },
            success: { ...palette.green },
            warning: { ...palette.orange },
        },
        alpha: {
            alert: { ...palette.redA },
            base: { ...palette.slateA },
            primary: { ...palette.blueA },
            success: { ...palette.greenA },
            warning: { ...palette.orangeA },
        },
    },
    palette,
});
