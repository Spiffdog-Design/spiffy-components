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

const AppRootContainer = ({ children }) => {
    const { themeClass } = useTheme();
    const docRef = useRef(window?.document);

    useEffect(() => {
        const body = docRef.current?.body;
        if (body != null) {
            body.className = themeClass;
        }
    }, [themeClass]);

    return (
        <>
            {children}
            <link rel="preconnect" href="https://fonts.googleapis.com" precedence="high" />
            <link rel="preconnect" href="https://fonts.gstatic.com" precedence="high" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                precedence="high"
                rel="stylesheet"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
                precedence="high"
                rel="stylesheet"
            />
        </>
    );
};
