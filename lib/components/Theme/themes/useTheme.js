import { createContext, useContext } from 'react';

import { theme } from '@/components/Theme/themes/theme.css';
import { lightTheme } from '@/components/Theme/themes/lightTheme.css';

export const ThemeContext = createContext({
    theme,
    themeName: 'light',
    themeClass: lightTheme,
    setThemeName: (name) => {},
});
export const useTheme = () => useContext(ThemeContext);
