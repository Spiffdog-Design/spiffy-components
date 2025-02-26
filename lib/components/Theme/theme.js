//import { gray, blue, red, green, grayDark, blueDark, redDark, greenDark } from '@spiffdog/spiffy-colors';
import { dark, light } from '@spiffdog/spiffy-colors';

// Create your light theme
const lightTheme = {
  colors: {
    primary: light.gray,
    info: light.blue,
    success: light.green,
    danger: light.ruby,
    warning: light.yellow,
  },
};

// Create your dark theme
const darkTheme = {
  colors: {
    primary: dark.gray,
    info: dark.blue,
    success: dark.green,
    danger: dark.ruby,
    warning: dark.yellow,
  },
};

export default {
  light: lightTheme,
  dark: darkTheme,
};
