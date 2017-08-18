const path = require('path');

module.exports = {
  // client webpack config name
  client: 'client',
  // server webpack config name
  server: 'server',
  alias: {
    assets: path.resolve(__dirname, '../src/assets'),
    client: path.resolve(__dirname, '../src/client'),
    server: path.resolve(__dirname, '../src/server'),
    shared: path.resolve(__dirname, '../src/shared'),
    themes: path.resolve(__dirname, '../src/themes'),
  },
};
