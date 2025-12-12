import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check if user has a saved preference
        const saved = localStorage.getItem('theme');
        if (saved && (saved === 'light' || saved === 'dark')) {
            return saved;
        }
        // Otherwise, use system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // Apply theme to document
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Listen for system theme changes (only if no manual override)
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e) => {
            // Only auto-update if user hasn't manually set a theme
            const savedTheme = localStorage.getItem('theme');
            if (!savedTheme) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const setThemeManually = (newTheme) => {
        if (newTheme === 'light' || newTheme === 'dark') {
            setTheme(newTheme);
        }
    };

    const resetToSystem = () => {
        localStorage.removeItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(systemTheme);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                themeName: theme, // For backward compatibility
                toggleTheme,
                setTheme: setThemeManually,
                resetToSystem,
                isSystemTheme: !localStorage.getItem('theme'),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext };
