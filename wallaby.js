
module.exports = (wallaby) => {
  return {
    files: [
      { pattern: 'src/**/*.jsx', load: true },
      { pattern: 'src/**/__tests__/*.spec.js', ignore: true },
      { pattern: 'src/**/*.js', load: true },
      { pattern: 'src/**/*.less', ignore: true },
      { pattern: 'jest.config.js', load: true },
      { pattern: 'config/*.js', ignore: true },
    ],
    tests: [
      'src/**/__tests__/*.spec.js',
    ],
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel({ babelrc: true }),
      '**/*.jsx': wallaby.compilers.babel({ babelrc: true }),
    },

    setup: (wallaby) => {
      wallaby.testFramework.configure(require('./jest.config.js'));
    },
  };
};
