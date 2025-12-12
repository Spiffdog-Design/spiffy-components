import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/lib',
        },
    },
    css: {
        modules: {
            generateScopedName: '[local]',
        },
    },
    build: {
        cssCodeSplit: false,
        lib: {
            entry: resolve(__dirname, './lib/components/index.js'),
            formats: ['es'],
            fileName: 'index',
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime', '@spiffdog/spiffy-colors/dist/index.css'],
            jsx: 'react-jsx',
        },
        sourcemap: true,
    },
});
