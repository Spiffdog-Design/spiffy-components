//import { gray, blue, red, green, grayDark, blueDark, redDark, greenDark } from '@spiffdog/spiffy-colors';
import { dark, light } from '@spiffdog/spiffy-colors';

// Create your light theme
const lightTheme = {
    colors: {
        base: light.slate,
        alert: light.tomato,
        primary: light.blue,
        success: light.green,
        warning: light.amber,
    },
    palette: light,
};

// Create your dark theme
const darkTheme = {
    colors: {
        base: dark.slate,
        alert: dark.tomato,
        primary: dark.blue,
        success: dark.green,
        warning: dark.amber,
    },
    palette: dark,
};

export default {
    light: lightTheme,
    dark: darkTheme,
};
