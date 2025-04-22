// src/themes/darkTheme.css.js
import { createTheme } from '@vanilla-extract/css';
import { theme } from './theme.css';

import { dark } from '@spiffdog/spiffy-colors';

export const darkTheme = createTheme(theme, {
    ...theme,
    colors: {
        ...theme.colors,
        solid: {
            alert: { ...dark.tomato },
            base: { ...dark.slate },
            primary: { ...dark.blue },
            success: { ...dark.green },
            warning: { ...dark.amber },
        },
        alpha: {
            alert: { ...dark.tomatoA },
            base: { ...dark.slateA },
            primary: { ...dark.blueA },
            success: { ...dark.greenA },
            warning: { ...dark.amberA },
        },
        palette: {
            ...theme.colors.palette,
            ...dark,
        },
    },
});
