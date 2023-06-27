import { defineConfig } from 'tsup';
import pkg from './package.json' assert { type: 'json' };

const banner = `/*
 * viper v${pkg.version}
 * Copyright (c) 2023-present Mayank Verma
 * Released under the Apache-2.0 License
 */`;

export default defineConfig([
  {
    entry: ['./src/client/main.ts'],
    banner: { js: banner },
    bundle: true,
    clean: true,
    dts: true,
    format: ['cjs', 'esm'],
    keepNames: true,
    minify: true,
    minifyWhitespace: true,
    outDir: './build',
    outExtension({ format }) {
      switch (format) {
        case 'cjs': {
          return { js: '.cjs' };
        }
        case 'esm': {
          return { js: '.mjs' };
        }
        default: {
          return { js: '.js' };
        }
      }
    },
    target: ['es6'],
    treeshake: true,
  },
  {
    entry: { bin: './src/cli/main.ts' },
    banner: { js: banner },
    bundle: true,
    clean: true,
    dts: false,
    format: ['cjs'],
    keepNames: true,
    minify: true,
    minifyWhitespace: true,
    outDir: './build',
    outExtension() {
      return { js: '.cjs' };
    },
    target: ['es6'],
    treeshake: true,
  },
]);
