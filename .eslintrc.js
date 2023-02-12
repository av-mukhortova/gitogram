module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue', 'jest'],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'vue/multi-word-component-names': 'off',
    'no-param-reassign': 0,
    'no-useless-catch': 'off',
  },
};
