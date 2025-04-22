// src/themes/themeContract.css.js
import { createThemeContract } from '@vanilla-extract/css';

const defaultColors = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
};

export const theme = createThemeContract({
    colors: {
        solid: {
            alert: { ...defaultColors },
            base: { ...defaultColors },
            primary: { ...defaultColors },
            success: { ...defaultColors },
            warning: { ...defaultColors },
        },
        alpha: {
            alert: { ...defaultColors },
            base: { ...defaultColors },
            primary: { ...defaultColors },
            success: { ...defaultColors },
            warning: { ...defaultColors },
        },
    },
});
