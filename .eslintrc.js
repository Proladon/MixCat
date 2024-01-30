module.exports = {
  extends: ['./.eslintrc-auto-import.json'],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    mocha: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
}
