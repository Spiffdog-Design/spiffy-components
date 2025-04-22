import { createContext } from 'react';

const ThemeContext = createContext({
    themeName: 'light', // Default theme
    updateTheme: (name) => {},
});

export default ThemeContext;
