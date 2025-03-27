//import { gray, blue, red, green, grayDark, blueDark, redDark, greenDark } from '@spiffdog/spiffy-colors';
import { dark, light } from '@spiffdog/spiffy-colors';

// Create your light theme
const lightTheme = {
    colors: {
        base: light.slate,
        baseA: light.slateA,

        alert: light.tomato,
        alertA: light.tomatoA,

        primary: light.blue,
        primaryA: light.blueA,

        success: light.green,
        successA: light.greenA,

        warning: light.amber,
        warningA: light.amberA,
    },
    palette: light,
};

// Create your dark theme
const darkTheme = {
    colors: {
        base: dark.slate,
        baseA: dark.slateA,

        alert: dark.tomato,
        alertA: dark.tomatoA,

        primary: dark.blue,
        primaryA: dark.blueA,

        success: dark.green,
        successA: dark.greenA,

        warning: dark.amber,
        warningA: dark.amberA,
    },
    palette: dark,
};

export default {
    light: lightTheme,
    dark: darkTheme,
};
