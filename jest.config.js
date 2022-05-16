/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', 'jest-extended/all'],
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  }
};
