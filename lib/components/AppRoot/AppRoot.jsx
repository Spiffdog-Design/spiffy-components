// import { useLocalStorage } from '@spiffdog/spiffy-hooks';

import * as styles from './AppRoot.css';
import { ThemeProvider } from '@/components';

const AppRoot = ({ children, ...props }) => {
    // const [t] = useLocalStorage('theme', defaultTheme?.light);
    // const theme = t ?? customTheme?.light ?? defaultTheme?.light;
    return (
        <ThemeProvider {...props}>
            <div className={styles.appRoot}>{children}</div>
        </ThemeProvider>
    );
};
AppRoot.displayName = 'AppRoot';

export default AppRoot;
