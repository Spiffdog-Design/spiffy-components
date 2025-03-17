import { useDebug, useLocalStorage } from '@spiffdog/spiffy-hooks';

import { ThemeProvider, defaultTheme } from '@/components';
import './styles.css';

const AppRoot = ({ children, ...props }) => {
    const [theme] = useLocalStorage('theme', defaultTheme.light);

    return (
        <ThemeProvider theme={theme} {...props}>
            {children}
        </ThemeProvider>
    );
};
AppRoot.displayName = 'AppRoot';

export default AppRoot;
