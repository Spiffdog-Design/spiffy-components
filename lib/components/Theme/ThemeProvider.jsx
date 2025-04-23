import { createContext, forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { lightTheme } from '@/components/Theme/themes/lightTheme.css';
import { darkTheme } from '@/components/Theme/themes/darkTheme.css';

export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = forwardRef(({ children }, ref) => {
    const matcher = useRef(window?.matchMedia('(prefers-color-scheme: dark)'));
    const [theme, setTheme] = useState(getSystemTheme(matcher.current)); // Initial theme name

    const handleColorSchemeChange = (event) => {
        setTheme(event.matches ? 'dark' : 'light');
    };

    useEffect(() => {
        matcher.current?.addEventListener('change', handleColorSchemeChange);
        return () => {
            matcher.current?.removeEventListener('change', handleColorSchemeChange);
        };
    }, []);

    const value = {
        theme,
        themeClass: theme === 'light' ? lightTheme : darkTheme,
        setTheme: (name) => setTheme(name),
    };

    return (
        <ThemeContext.Provider ref={ref} value={value}>
            {children}
        </ThemeContext.Provider>
    );
});
ThemeProvider.displayName = 'ThemeProvider';

const getSystemTheme = (matcher) => (matcher?.matches ? 'dark' : 'light');

const ThemeContext = createContext({
    theme: 'light', // Default theme
    themeClass: lightTheme,
    setTheme: (name) => {},
});
