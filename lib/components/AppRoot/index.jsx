import { useDebug, useLocalStorage } from '@spiffdog/spiffy-hooks';

import { ThemeProvider, defaultTheme } from '@/components';
import './styles.css';

const AppRoot = ({ children, theme, ...props }) => {
    //const [t] = useLocalStorage('theme', defaultTheme.light);
    const t = theme?.light ?? defaultTheme.light;
    useDebug(t);

    return (
        //<ThemeProvider theme={t ?? theme?.light ?? defaultTheme.light} {...props}>
        <ThemeProvider theme={t} {...props}>
            {children}
        </ThemeProvider>
    );
};
AppRoot.displayName = 'AppRoot';

export default AppRoot;
