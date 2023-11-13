import typescript from '@rollup/plugin-typescript'
import createBanner from 'create-banner'
import { defineConfig } from 'rollup'
import copy from 'rollup-plugin-copy'
import pkg from './package.json' assert { type: 'json' }

const banner = createBanner()

export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      banner,
      name: pkg.space,
      file: pkg.main,
      format: 'umd',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      banner,
      name: pkg.space,
      file: pkg.module,
      format: 'esm',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      copy({
        targets: [
          { src: 'src/*.css', dest: 'dist' },
          { src: 'dist/*.(js|css)', dest: 'docs/public/example/lib' },
        ],
      }),
    ],
  },
])
