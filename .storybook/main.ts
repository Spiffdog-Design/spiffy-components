import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react-vite',
    core: {
        builder: '@storybook/builder-vite',
        disableTelemetry: true,
    },
    async viteFinal(config) {
        return {
            ...config,
            resolve: {
                alias: {
                    '@/components': path.resolve(__dirname, '../lib/components'), // Add more aliases as needed
                    '@/utilities': path.resolve(__dirname, '../lib/utilities'), // Add more aliases as needed
                },
            },
        };
    },
    docs: {},
};

export default config;
