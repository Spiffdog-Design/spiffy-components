import { useEffect, useState } from 'react';
import { ThemeProvider, defaultTheme } from '@/components';
import './styles.css';

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
AppRoot.displayName = 'AppRoot';

export default AppRoot;
