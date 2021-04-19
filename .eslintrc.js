module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.js?(x)', '**/tests/**/*.test.js?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
