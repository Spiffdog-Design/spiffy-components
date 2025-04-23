import { useEffect, useRef } from 'react';
import { ThemeProvider, useTheme } from '@/components';

import './AppRoot.css';

const AppRoot = ({ children, ...props }) => {
    return (
        <ThemeProvider {...props}>
            <AppRootContainer>{children}</AppRootContainer>
        </ThemeProvider>
    );
};
AppRoot.displayName = 'AppRoot';

export default AppRoot;

const AppRootContainer = ({ children, ...props }) => {
    const { themeClass } = useTheme();
    const winRef = useRef(window);

    useEffect(() => {
        if (winRef.current != null) {
            winRef.current.document.querySelector('body').className = themeClass;
        }
    }, [themeClass]);

    return children;
};
