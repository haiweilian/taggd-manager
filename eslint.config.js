import typescript from '@bfehub/eslint-config-typescript'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...typescript,
  {
    rules: {
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },
  {
    ignores: ['dist', 'docs/public'],
  },
]
