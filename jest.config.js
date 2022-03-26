/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  // https://kulshekhar.github.io/ts-jest/docs/getting-started/presets
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', 'jest-extended/all'],
  collectCoverageFrom: ['<rootDir>/src/**/*']
};
