import React, { createContext, useContext } from 'react';
import _merge from 'lodash/merge';

const defaultTheme = Object.freeze({
    colors: {
        primary: '',
        success: '',
        warning: '',
        alert: '',
    },
    fonts: {
        headings: {
            family: [],
            size: [],
        },
        text: {
            family: [],
            size: 12,
        },
    },
    sizes: [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64],
    disabled: {
        opacity: 0.65,
    },
});

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({ children, theme }) => {
    const merged = _merge(defaultTheme, theme);
    return <ThemeContext.Provider value={merged}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
