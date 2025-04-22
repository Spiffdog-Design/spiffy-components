import { createContext, useContext, useState } from 'react';
import { lightTheme } from '@/components/Theme/themes/lightTheme.css';
import { darkTheme } from '@/components/Theme/themes/darkTheme.css';

const ThemeContext = createContext({
    theme: 'light', // Default theme
    themeClass: lightTheme,
    setTheme: (name) => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Initial theme name

    const value = {
        theme,
        themeClass: theme === 'light' ? lightTheme : darkTheme,
        setTheme: (name) => setTheme(name),
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
ThemeProvider.displayName = 'ThemeProvider';
