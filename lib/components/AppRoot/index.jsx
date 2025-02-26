import { useDebug, useLocalStorage } from '@spiffdog/spiffy-hooks';

import { ThemeProvider, defaultTheme } from '/lib';
import { useEffect } from 'react';

const AppRoot = ({ children, ...props }) => {
    const [theme] = useLocalStorage('theme', defaultTheme.light);

    useDebug(theme, 'theme');

    useEffect(() => {
        console.log('plop');
    }, [localStorage.getItem('theme')]);

    return (
        <ThemeProvider theme={theme} {...props}>
            {children}
        </ThemeProvider>
    );
};

export default AppRoot;
