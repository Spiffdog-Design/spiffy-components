//import { gray, blue, red, green, grayDark, blueDark, redDark, greenDark } from '@spiffdog/spiffy-colors';
import { dark, light } from '@spiffdog/spiffy-colors';

// Create your light theme
const lightTheme = {
    colors: {
        alert: light.tomato,
        info: light.blue,
        primary: light.slate,
        success: light.green,
        warning: light.amber,
    },
};

// Create your dark theme
const darkTheme = {
    colors: {
        alert: dark.tomato,
        info: dark.blue,
        primary: dark.slate,
        success: dark.green,
        warning: dark.amber,
    },
};

export default {
    light: lightTheme,
    dark: darkTheme,
};
