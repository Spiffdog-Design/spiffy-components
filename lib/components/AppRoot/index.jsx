import { useLocalStorage } from '@spiffdog/spiffy-hooks';
import styled, { createGlobalStyle } from 'styled-components';

import { ThemeProvider, defaultTheme } from '@/components';
import './styles.css';

const AppRoot = ({ children, customTheme, ...props }) => {
    const [t] = useLocalStorage('theme', defaultTheme?.light);
    const theme = t ?? customTheme?.light ?? defaultTheme?.light;
    return (
        <ThemeProvider theme={theme} {...props}>
            {children}
            <GlobalCssTheme />
        </ThemeProvider>
    );
};
AppRoot.displayName = 'AppRoot';

export default AppRoot;

const GlobalCssTheme = createGlobalStyle`
    :root {
        --alert-01: ${({ theme }) => theme.colors.alert[1]};
        --alert-02: ${({ theme }) => theme.colors.alert[2]};
        --alert-03: ${({ theme }) => theme.colors.alert[3]};
        --alert-04: ${({ theme }) => theme.colors.alert[4]};
        --alert-05: ${({ theme }) => theme.colors.alert[5]};
        --alert-06: ${({ theme }) => theme.colors.alert[6]};
        --alert-07: ${({ theme }) => theme.colors.alert[7]};
        --alert-08: ${({ theme }) => theme.colors.alert[8]};
        --alert-09: ${({ theme }) => theme.colors.alert[9]};
        --alert-10: ${({ theme }) => theme.colors.alert[10]};
        --alert-11: ${({ theme }) => theme.colors.alert[11]};
        --alert-12: ${({ theme }) => theme.colors.alert[12]};

        --base-01: ${({ theme }) => theme.colors.base[1]};
        --base-02: ${({ theme }) => theme.colors.base[2]};
        --base-03: ${({ theme }) => theme.colors.base[3]};
        --base-04: ${({ theme }) => theme.colors.base[4]};
        --base-05: ${({ theme }) => theme.colors.base[5]};
        --base-06: ${({ theme }) => theme.colors.base[6]};
        --base-07: ${({ theme }) => theme.colors.base[7]};
        --base-08: ${({ theme }) => theme.colors.base[8]};
        --base-09: ${({ theme }) => theme.colors.base[9]};
        --base-10: ${({ theme }) => theme.colors.base[10]};
        --base-11: ${({ theme }) => theme.colors.base[11]};
        --base-12: ${({ theme }) => theme.colors.base[12]};

        --primary-01: ${({ theme }) => theme.colors.primary[1]};
        --primary-02: ${({ theme }) => theme.colors.primary[2]};
        --primary-03: ${({ theme }) => theme.colors.primary[3]};
        --primary-04: ${({ theme }) => theme.colors.primary[4]};
        --primary-05: ${({ theme }) => theme.colors.primary[5]};
        --primary-06: ${({ theme }) => theme.colors.primary[6]};
        --primary-07: ${({ theme }) => theme.colors.primary[7]};
        --primary-08: ${({ theme }) => theme.colors.primary[8]};
        --primary-09: ${({ theme }) => theme.colors.primary[9]};
        --primary-10: ${({ theme }) => theme.colors.primary[10]};
        --primary-11: ${({ theme }) => theme.colors.primary[11]};
        --primary-12: ${({ theme }) => theme.colors.primary[12]};

        --success-01: ${({ theme }) => theme.colors.success[1]};
        --success-02: ${({ theme }) => theme.colors.success[2]};
        --success-03: ${({ theme }) => theme.colors.success[3]};
        --success-04: ${({ theme }) => theme.colors.success[4]};
        --success-05: ${({ theme }) => theme.colors.success[5]};
        --success-06: ${({ theme }) => theme.colors.success[6]};
        --success-07: ${({ theme }) => theme.colors.success[7]};
        --success-08: ${({ theme }) => theme.colors.success[8]};
        --success-09: ${({ theme }) => theme.colors.success[9]};
        --success-10: ${({ theme }) => theme.colors.success[10]};
        --success-11: ${({ theme }) => theme.colors.success[11]};
        --success-12: ${({ theme }) => theme.colors.success[12]};

        --warning-01: ${({ theme }) => theme.colors.warning[1]};
        --warning-02: ${({ theme }) => theme.colors.warning[2]};
        --warning-03: ${({ theme }) => theme.colors.warning[3]};
        --warning-04: ${({ theme }) => theme.colors.warning[4]};
        --warning-05: ${({ theme }) => theme.colors.warning[5]};
        --warning-06: ${({ theme }) => theme.colors.warning[6]};
        --warning-07: ${({ theme }) => theme.colors.warning[7]};
        --warning-08: ${({ theme }) => theme.colors.warning[8]};
        --warning-09: ${({ theme }) => theme.colors.warning[9]};
        --warning-10: ${({ theme }) => theme.colors.warning[10]};
        --warning-11: ${({ theme }) => theme.colors.warning[11]};
        --warning-12: ${({ theme }) => theme.colors.warning[12]};
    }
`;
