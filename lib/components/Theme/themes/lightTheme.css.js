// src/themes/lightTheme.css.js
import { createTheme } from '@vanilla-extract/css';
import { theme } from './theme.css';

import { light } from '@spiffdog/spiffy-colors';

const palette = { ...light };
export const lightTheme = createTheme(theme, {
    ...theme,
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
