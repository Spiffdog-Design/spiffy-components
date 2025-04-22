import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    plugins: [vanillaExtractPlugin(), react()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './lib'),
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
                    .sync('lib/**/*.{js,jsx}', {
                        ignore: [
                            'lib/**/*.d.{js,jsx}',
                            'lib/**/*.test.{js,jsx}',
                            'lib/**/*.stories.{js,jsx}',
                            'lib/**/Storybook/**/*.{js,jsx}',
                        ],
                    })
                    .map((file) => [
                        // 1. The name of the entry point
                        // lib/nested/foo.js becomes nested/foo
                        relative('lib', file.slice(0, file.length - extname(file).length)),
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
