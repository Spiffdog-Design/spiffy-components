// src/themes/lightTheme.css.js
import { createTheme } from '@vanilla-extract/css';
import { theme } from './theme.css';
import { defaultThemeValues } from './defaultTheme.js';

import { lightOkLab } from '@spiffdog/spiffy-colors';

const palette = { ...lightOkLab };
export const lightTheme = createTheme(theme, {
    ...defaultThemeValues,
    colors: {
        ...theme.colors,
        solid: {
            alert: { ...palette.red },
            base: { ...palette.slate },
            primary: { ...palette.blue },
            success: { ...palette.green },
            warning: { ...palette.amber },
        },
        alpha: {
            alert: { ...palette.redA },
            base: { ...palette.slateA },
            primary: { ...palette.blueA },
            success: { ...palette.greenA },
            warning: { ...palette.amberA },
        },
    },
    palette,
});
