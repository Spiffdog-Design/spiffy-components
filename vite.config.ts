/// <reference types="vitest" />

import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

export default defineConfig({
  build: {
    cssMinify: 'lightningcss',
    emptyOutDir: true, // Clears the output directory before building.
    lib: {
      entry: './src/index.ts', // Specifies the entry point for building the library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
      name: 'vite-react-ts-button', // Sets the name of the generated library.
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
  },
  css: {
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
    transformer: 'lightningcss',
  },
  plugins: [dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.ts',
  },
});
