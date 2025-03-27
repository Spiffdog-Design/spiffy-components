import { useDebug, useLocalStorage } from '@spiffdog/spiffy-hooks';

import { ThemeProvider, defaultTheme } from '@/components';
import './styles.css';

const AppRoot = ({ children, customTheme, ...props }) => {
    const [t] = useLocalStorage('theme', defaultTheme?.light);
    const theme = t ?? customTheme?.light ?? defaultTheme?.light;

    useDebug(t, 'AppRoot LocalStorage');
    useDebug(customTheme, 'AppRoot customTheme');
    useDebug(theme, 'AppRoot Compiled');
    return (
        <ThemeProvider theme={theme} {...props}>
            {children}
        </ThemeProvider>
    );
};
AppRoot.displayName = 'AppRoot';

export default AppRoot;
