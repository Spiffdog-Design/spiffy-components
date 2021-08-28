import React, { createContext, useContext } from 'react';
import _merge from 'lodash/merge';
import defaultTheme from './theme';

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
