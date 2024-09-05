module.exports = {
    setupFilesAfterEnv: ['<rootDir>/test/setup.js'], // Path to your setup file
    testEnvironment: 'node', // Use 'node' environment for server-side testing
    testMatch: ['**/test/**/*.test.js'], // Pattern to match test files
    verbose: true, // Enable verbose logging
  };