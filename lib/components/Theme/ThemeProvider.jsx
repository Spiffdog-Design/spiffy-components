import { useState } from 'react';
import ThemeContext from './ThemeContext';

export const ThemeProvider = ({ children, theme }) => {
    const [themeName, setThemeName] = useState('light'); // Initial theme

    const updateTheme = (name) => setThemeName(name);

    const value = {
        themeName,
        updateTheme,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
ThemeProvider.displayName = 'ThemeProvider';
