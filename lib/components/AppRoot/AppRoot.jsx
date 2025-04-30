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
        const doc = docRef.current;
        const body = docRef.current?.body;
        const linkFragment = getFontLinks(doc);
        if (body != null) {
            body.className = themeClass;
            body.appendChild(linkFragment);
        }
    }, [themeClass]);

    return children;
};

function getFontLinks(doc) {
    if (doc != null) {
        const links = [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            },
        ];
        const fragment = document.createDocumentFragment();
        links.forEach((l) => {
            const link = doc.createElement('link');
            link.rel = l.rel;
            link.href = l.href;
            fragment.appendChild(link);
        });
        return fragment;
    }
    return null;
}
