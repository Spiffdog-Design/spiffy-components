import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

/**
 * useTheme hook - Access theme context and theme management functions.
 * 
 * Must be used within a ThemeProvider.
 * 
 * @returns {Object} Theme context object
 * @returns {string} returns.theme - Current theme ('light' | 'dark')
 * @returns {string} returns.themeName - Alias for theme (for backward compatibility)
 * @returns {Function} returns.toggleTheme - Toggle between light and dark themes
 * @returns {Function} returns.setTheme - Manually set theme ('light' | 'dark')
 * @returns {Function} returns.resetToSystem - Reset to system preference
 * @returns {boolean} returns.isSystemTheme - Whether currently using system theme
 * 
 * @throws {Error} If used outside ThemeProvider
 */
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

/**
 * ThemeProvider component - Provides theme context to child components.
 * 
 * Manages theme state, system preference detection, and localStorage persistence.
 * Automatically applies theme to document and listens for system theme changes.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} [props.themeName] - Initial theme name ('light' | 'dark')
 */
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
