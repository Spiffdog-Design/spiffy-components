// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from '@storybook/react-vite';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
    stories: ['../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: ['@storybook/addon-links', '@storybook/addon-docs'],

    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    core: {
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
            css: {
                modules: {
                    generateScopedName: '[local]',
                },
            },
        };
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};

export default config;
