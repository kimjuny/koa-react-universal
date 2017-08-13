require('babel-polyfill');
require('babel-core/register')({
  plugins: [
    'dynamic-import-webpack',
  ],
});

__ROOT__ = require('path').resolve(__dirname, '../');

require('./server/server.js').default();
