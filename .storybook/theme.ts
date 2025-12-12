// .storybook/theme.js
import { create } from 'storybook/theming';
import { dark } from '@spiffdog/spiffy-colors';

const palette = {
    alert: { ...dark.red },
    base: { ...dark.slate },
    primary: { ...dark.blue },
    success: { ...dark.green },
    warning: { ...dark.orange },
};

export default create({
    base: 'dark', // or 'light'

    // Brand colors
    // colorPrimary: palette.alert[11], // Your primary color
    // colorSecondary: palette.primary[11], // Your secondary color

    // UI
    // appBg: 'white',
    // appContentBg: 'white',
    // appBorderColor: 'grey',
    // appBorderRadius: 4,

    // Typography
    fontBase: '"Roboto", sans-serif',
    fontCode: 'monospace',

    // Text colors
    // textColor: `rgb(from ${palette.base[11]} r g b)`,
    // textInverseColor: `rgb(from ${palette.base[1]} r g b)`,

    // Toolbar default and active colors
    // barTextColor: `rgb(from ${palette.base[7]} r g b)`,
    // barSelectedColor: `rgb(from ${palette.base[11]} r g b)`,
    // barBg: `rgb(from ${palette.base[1]} r g b)`,

    // Form colors
    // inputBg: `rgb(from ${palette.base[1]} r g b)`,
    // inputBorder: `rgb(from ${palette.base[7]} r g b)`,
    // inputTextColor: `rgb(from ${palette.base[11]} r g b)`,
    inputBorderRadius: 4,

    // Brand
    brandTitle: 'My Custom Storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://placehold.it/350x150', // Your logo URL
});
