import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import { resolve } from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    plugins: [vanillaExtractPlugin(), react()],
    resolve: {
        alias: [
            {
                find: '@/components',
                replacement: resolve(__dirname, './lib/components'),
            },
        ],
    },
    build: {
        copyPublicDir: false,
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, './lib/components/index.js'),
            formats: ['es'],
            fileName: 'index',
        },
        manifest: 'manifest.json',
        ssrManifest: 'ssr-manifest.json',
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'],
            jsx: 'react-jsx',
        },
        sourcemap: true,
    },
});
