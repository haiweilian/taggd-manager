import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import copy from 'rollup-plugin-copy'
import pkg from './package.json' assert { type: 'json' }

export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      name: pkg.space,
      file: pkg.main,
      format: 'umd',
    },
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: {
      name: pkg.space,
      file: pkg.module,
      format: 'esm',
    },
    plugins: [
      typescript(),
      copy({
        hook: 'writeBundle',
        targets: [
          { src: 'src/*.css', dest: 'dist' },
          { src: 'dist/*.(js|css)', dest: 'docs/public/example/lib' },
        ],
      }),
    ],
  },
])
