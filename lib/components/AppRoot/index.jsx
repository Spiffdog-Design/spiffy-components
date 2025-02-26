import { useEffect, useState } from 'react';

import { ThemeProvider, defaultTheme } from '/lib';

const AppRoot = ({ children, ...props }) => {
    const [theme, setTheme] = useState(defaultTheme.light);

    useEffect(() => {
        const handleStorage = () => {
            const t = localStorage.getItem('theme');
            setTheme(t != null ? JSON.parse(t) : defaultTheme.light);
        };
        window.addEventListener('theme-changed', handleStorage);
        return () => window.removeEventListener('theme-changed', handleStorage);
    }, []);

    return (
        <ThemeProvider theme={theme} {...props}>
            {children}
        </ThemeProvider>
    );
};

export default AppRoot;
