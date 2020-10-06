import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import pkg from './package.json'

export default [
  {
    input: 'src/main.js',
    output: {
      name: pkg.space,
      file: pkg.main,
      format: 'umd',
    },
    plugins: [resolve(), commonjs(), babel({ babelHelpers: 'bundled' })],
  },
  {
    input: 'src/main.js',
    output: {
      name: pkg.space,
      file: pkg.module,
      format: 'esm',
    },
  },
]
