import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

import { ThemeProvider, useTheme } from '@/components';

import '@spiffdog/spiffy-colors/dist/index.css';
import '../Theme/themes/default-theme.css';
import './AppRoot.css';

/**
 * AppRoot component - Root component that sets up theming, fonts, and global styles.
 *
 * Wrap your entire app with this component. It provides:
 * - Theme context via ThemeProvider
 * - Roboto font loading
 * - Global CSS reset and base styles
 * - HTML font-size configuration (62.5% for easy rem calculations)
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Your app content
 * @param {string} [props.themeName] - Initial theme name ('light' | 'dark')
 */
export const AppRoot = ({ children, ...props }) => {
    return (
        <ThemeProvider {...props}>
            <AppRootContainer>{children}</AppRootContainer>
        </ThemeProvider>
    );
};

AppRoot.displayName = 'AppRoot';

const AppRootContainer = ({ children }) => {
    const { themeName } = useTheme();
    const docRef = useRef(window?.document);

    useEffect(() => {
        console.log(themeName);
        const body = docRef.current?.body;
        if (body != null) {
            body.className = themeName;
        }
    }, [themeName]);

    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
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
