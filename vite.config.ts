import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
    plugins: [react(), libInjectCss(), dts({ include: ['lib'] })],
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
        lib: {
            entry: resolve(__dirname, './lib/index.js'),
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'],
            input: Object.fromEntries(
                glob
                    .sync('lib/components/**/*.{js,jsx}', {
                        ignore: ['lib/**/*.d.js', 'lib/**/*.stories.jsx', 'lib/components/Storybook/**/*'],
                    })
                    .map((file) => [
                        // 1. The name of the entry point
                        // lib/nested/foo.js becomes nested/foo
                        relative('lib/components', file.slice(0, file.length - extname(file).length)),
                        // 2. The absolute path to the entry file
                        // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                        fileURLToPath(new URL(file, import.meta.url)),
                    ]),
            ),
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
            },
        },
    },
});
