require('colors');
const Koa = require('koa');
const webpack = require('webpack');
const { webpackServer, findCompiler } = require('koa-webpack-server');
const configs = require('../config/webpack.dev.config');

const app = new Koa();
const compilers = webpack(configs);
const clientCompiler = findCompiler(compilers, 'client');

const options = {
  compilers,
  dev: {
    noInfo: false,
    quiet: true,
    serverSideRender: true,
    publicPath: clientCompiler.options.output.publicPath,
  },
};

console.log(`${'[SYS]'.rainbow} webpack building...`);

// koa-webpack-server: https://github.com/kimjuny/koa-webpack-server
webpackServer(app, options).then(({ middlewares }) => {
  const { logger, favicon, views, render } = middlewares;

  // koa2 hot middlewares: once changes are detected in these middlewares, they will be hot reloaded,
  // so you don't have to restart your node server.
  app.use(logger);
  app.use(favicon);
  app.use(views);
  app.use(render);

  app.listen(process.env.PORT, () => {
    console.log(`${'[SYS]'.rainbow} server started at port %s`, process.env.PORT);
  });
}).catch(() => {
});
