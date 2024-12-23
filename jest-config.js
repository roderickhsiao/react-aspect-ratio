module.exports = {
  transform: {
    '^.+\\.(jsx|tsx|js|ts)?$': 'babel-jest'
  },
  reporters: ['default', 'jest-junit'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: "jsdom"
};
