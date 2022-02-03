module.exports = {
  root: true,
  // https://eslint.org/docs/user-guide/configuring/language-options
  env: {
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    // https://eslint.org/docs/rules
    'eslint:recommended',
    // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/src/configs#recommended
    'plugin:@typescript-eslint/recommended',
    // https://github.com/jest-community/eslint-plugin-jest#recommended
    'plugin:jest/recommended',
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended'
  ]
};
