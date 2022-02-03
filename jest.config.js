/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  // https://kulshekhar.github.io/ts-jest/docs/getting-started/presets
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  detectOpenHandles: true,
  forceExit: true,
  verbose: true,
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*']
};

module.exports = config;
