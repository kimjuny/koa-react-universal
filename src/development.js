require('babel-polyfill');
require('babel-core/register')({
  "presets": [
    "es2015",
    "react",
    "stage-0"
  ],
  "plugins": [
    "transform-async-to-generator",
    "universal-import",
    "syntax-dynamic-import"
  ]
});

__ROOT__ = require('path').resolve(__dirname, '../');

require('./server/server.js').default();
