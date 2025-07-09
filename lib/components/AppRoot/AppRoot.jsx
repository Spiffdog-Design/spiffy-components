import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

import { ThemeProvider, useTheme } from '@/components';

import './AppRoot.css';

export const AppRoot = ({ children, ...props }) => {
    return (
        <ThemeProvider {...props}>
            <AppRootContainer>{children}</AppRootContainer>
        </ThemeProvider>
    );
};

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
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
                />
            </Helmet>
            {children}
        </>
    );
};
