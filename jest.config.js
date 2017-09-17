module.exports = {
  notify: true,
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/config/jest.css.stub.js',
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/config/',
    '<rootDir>/build/',
    '<rootDir>/coverage/',
    '<rootDir>/docs/',
    '<rootDir>/node_modules/',
    '<rootDir>/scripts/',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
};
