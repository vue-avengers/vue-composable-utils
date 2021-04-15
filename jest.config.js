module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['<rootDir>/tests/**.test.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  // collectCoverageFrom: ['<rootDir>/tests/**/*.js'],
  coveragePathIgnorePatterns: ['<rootDir>/src.*/index.js'],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'vue-jest': {
      diagnostics: false,
    },
  },
  snapshotSerializers: ['jest-serializer-vue'],
};
