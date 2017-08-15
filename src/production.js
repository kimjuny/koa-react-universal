require('colors');
const webpack = require('webpack');
const Koa = require('koa');
const configs = require('../config/webpack.prod.config');

console.log(`${'[SYS]'.rainbow} webpack building...`);

webpack(configs).run((err, stats) => {
  const app = new Koa();

  app.use(async (ctx, next) => {
    ctx.state.webpackStats = stats;
    await next();
  });

  const {
    logger, statics, render,
  } = require('../build/server/server');

  app.use(logger);
  app.use(statics);
  app.use(render);

  app.listen(process.env.PORT, () => {
    console.log(`${'[SYS]'.rainbow} server started at port ${process.env.PORT}`);
  });
});
