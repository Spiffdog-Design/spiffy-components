import { useLocalStorage } from '@spiffdog/spiffy-hooks';
import { createGlobalStyle } from 'styled-components';

import { ThemeProvider, defaultTheme } from '@/components';

const AppRoot = ({ children, customTheme, ...props }) => {
    const [t] = useLocalStorage('theme', defaultTheme?.light);
    const theme = t ?? customTheme?.light ?? defaultTheme?.light;
    return (
        <ThemeProvider theme={theme} {...props}>
            <GlobalColorTheme />
            <GlobalCss />
            <GoogleFont />
            {children}
        </ThemeProvider>
    );
};
AppRoot.displayName = 'AppRoot';

export default AppRoot;

const GoogleFont = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
`;
const GlobalColorTheme = createGlobalStyle`
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
        --alertA-01: ${({ theme }) => theme.colors.alertA[1]};
        --alertA-02: ${({ theme }) => theme.colors.alertA[2]};
        --alertA-03: ${({ theme }) => theme.colors.alertA[3]};
        --alertA-04: ${({ theme }) => theme.colors.alertA[4]};
        --alertA-05: ${({ theme }) => theme.colors.alertA[5]};
        --alertA-06: ${({ theme }) => theme.colors.alertA[6]};
        --alertA-07: ${({ theme }) => theme.colors.alertA[7]};
        --alertA-08: ${({ theme }) => theme.colors.alertA[8]};
        --alertA-09: ${({ theme }) => theme.colors.alertA[9]};
        --alertA-10: ${({ theme }) => theme.colors.alertA[10]};
        --alertA-11: ${({ theme }) => theme.colors.alertA[11]};
        --alertA-12: ${({ theme }) => theme.colors.alertA[12]};

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
        --baseA-01: ${({ theme }) => theme.colors.baseA[1]};
        --baseA-02: ${({ theme }) => theme.colors.baseA[2]};
        --baseA-03: ${({ theme }) => theme.colors.baseA[3]};
        --baseA-04: ${({ theme }) => theme.colors.baseA[4]};
        --baseA-05: ${({ theme }) => theme.colors.baseA[5]};
        --baseA-06: ${({ theme }) => theme.colors.baseA[6]};
        --baseA-07: ${({ theme }) => theme.colors.baseA[7]};
        --baseA-08: ${({ theme }) => theme.colors.baseA[8]};
        --baseA-09: ${({ theme }) => theme.colors.baseA[9]};
        --baseA-10: ${({ theme }) => theme.colors.baseA[10]};
        --baseA-11: ${({ theme }) => theme.colors.baseA[11]};
        --baseA-12: ${({ theme }) => theme.colors.baseA[12]};

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
        --primaryA-01: ${({ theme }) => theme.colors.primaryA[1]};
        --primaryA-02: ${({ theme }) => theme.colors.primaryA[2]};
        --primaryA-03: ${({ theme }) => theme.colors.primaryA[3]};
        --primaryA-04: ${({ theme }) => theme.colors.primaryA[4]};
        --primaryA-05: ${({ theme }) => theme.colors.primaryA[5]};
        --primaryA-06: ${({ theme }) => theme.colors.primaryA[6]};
        --primaryA-07: ${({ theme }) => theme.colors.primaryA[7]};
        --primaryA-08: ${({ theme }) => theme.colors.primaryA[8]};
        --primaryA-09: ${({ theme }) => theme.colors.primaryA[9]};
        --primaryA-10: ${({ theme }) => theme.colors.primaryA[10]};
        --primaryA-11: ${({ theme }) => theme.colors.primaryA[11]};
        --primaryA-12: ${({ theme }) => theme.colors.primaryA[12]};

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
        --successA-01: ${({ theme }) => theme.colors.successA[1]};
        --successA-02: ${({ theme }) => theme.colors.successA[2]};
        --successA-03: ${({ theme }) => theme.colors.successA[3]};
        --successA-04: ${({ theme }) => theme.colors.successA[4]};
        --successA-05: ${({ theme }) => theme.colors.successA[5]};
        --successA-06: ${({ theme }) => theme.colors.successA[6]};
        --successA-07: ${({ theme }) => theme.colors.successA[7]};
        --successA-08: ${({ theme }) => theme.colors.successA[8]};
        --successA-09: ${({ theme }) => theme.colors.successA[9]};
        --successA-10: ${({ theme }) => theme.colors.successA[10]};
        --successA-11: ${({ theme }) => theme.colors.successA[11]};
        --successA-12: ${({ theme }) => theme.colors.successA[12]};

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
        --warningA-01: ${({ theme }) => theme.colors.warningA[1]};
        --warningA-02: ${({ theme }) => theme.colors.warningA[2]};
        --warningA-03: ${({ theme }) => theme.colors.warningA[3]};
        --warningA-04: ${({ theme }) => theme.colors.warningA[4]};
        --warningA-05: ${({ theme }) => theme.colors.warningA[5]};
        --warningA-06: ${({ theme }) => theme.colors.warningA[6]};
        --warningA-07: ${({ theme }) => theme.colors.warningA[7]};
        --warningA-08: ${({ theme }) => theme.colors.warningA[8]};
        --warningA-09: ${({ theme }) => theme.colors.warningA[9]};
        --warningA-10: ${({ theme }) => theme.colors.warningA[10]};
        --warningA-11: ${({ theme }) => theme.colors.warningA[11]};
        --warningA-12: ${({ theme }) => theme.colors.warningA[12]};

        ${({ theme }) => {
            let literal = ``;
            Object.keys(theme?.palette).forEach((color) => {
                Object.keys(theme?.palette[color]).forEach((key) => {
                    literal += `
                        --${color}-${key}: ${theme?.palette[color][key]};
                    `;
                });
            });
            return literal;
        }}
    }
`;
const GlobalCss = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
    }

    html,
    body,
    #root {
        height: 100%;
        width: 100%;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Source Sans 3', sans-serif;
        font-weight: 400;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        font-size: 1.2rem;
    }

    strong {
        font-weight: 700;
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font-family: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        hyphens: auto;
    }

`;
