/* eslint-disable no-console, import/no-unresolved */
require('colors');
const webpack = require('webpack');
const Koa = require('koa');
const configs = require('../config/webpack.prod.config');

console.log(`${'[SYS]'.rainbow} webpack building...`);

webpack(configs).run((err, stats) => {
  const app = new Koa();

  // wire webpack stats for server render
  app.use(async (ctx, next) => {
    ctx.state.webpackStats = stats;
    await next();
  });

  const {
    logger, favicon, statics, views, render,
  } = require('../build/server/server');

  // koa2 middlewares
  app.use(logger);
  app.use(favicon);
  app.use(statics);
  app.use(views);
  app.use(render);

  // start
  app.listen(process.env.PORT, () => {
    console.log(`${'[SYS]'.rainbow} server started at port ${process.env.PORT}`);
  });
});
/* eslint-enable */
