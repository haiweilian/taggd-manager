import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import createBanner from 'create-banner'
import pkg from './package.json'

const banner = createBanner()

export default [
  {
    input: 'src/index.ts',
    output: {
      banner,
      name: pkg.space,
      file: pkg.main,
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
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
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
  },
]
