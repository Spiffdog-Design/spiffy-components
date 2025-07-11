// .storybook/theme.js
import { create } from 'storybook/theming';
import { light } from '@spiffdog/spiffy-colors';

const palette = {
    alert: { ...light.red },
    base: { ...light.slate },
    primary: { ...light.blue },
    success: { ...light.green },
    warning: { ...light.orange },
};

export default create({
    base: 'light', // or 'dark'

    // Brand colors
    colorPrimary: palette.alert[11], // Your primary color
    colorSecondary: palette.primary[11], // Your secondary color

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Roboto", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: palette.base[11],
    textInverseColor: palette.base[1],

    // Toolbar default and active colors
    barTextColor: palette.base[7],
    barSelectedColor: palette.base[11],
    barBg: palette.base[1],

    // Form colors
    inputBg: palette.base[1],
    inputBorder: palette.base[7],
    inputTextColor: palette.base[11],
    inputBorderRadius: 4,

    // Brand
    brandTitle: 'My Custom Storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://placehold.it/350x150', // Your logo URL
});
