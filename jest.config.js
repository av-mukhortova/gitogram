module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '.*\\.(vue)$': 'vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },
};
