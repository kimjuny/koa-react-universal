require('colors');
const path = require('path');
const webpack = require('webpack');
const configs = require('../config/webpack.prod.config');

__ROOT__ = path.resolve(__dirname, '../');

console.log(`${'[SYS]'.rainbow} webpack building.`);

webpack(configs).run((err, stats) => {
  console.log(`${'[SYS]'.rainbow} webpack build finished.`);

  const clientStats = stats.toJson().children[0];
  require('../build/server/server').default(clientStats);
});
